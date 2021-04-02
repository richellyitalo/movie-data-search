import { Col, Row } from 'react-grid-system';
import MovieBody from '../../components/movie-single/movie-body';
import MovieDetail from '../../components/movie-single/movie-detail';
import MovieHeader from '../../components/movie-single/movie-header';
import MovieThumbnail from '../../components/movie-single/movie-thumbnail';
import { getMovie } from '../../services/movies';

function MovieSingle({ movie }) {
  const {
    title,
    overview,
    production_countries,
    production_companies,
    release_date,
    spoken_languages,
    imdb_id,
    homepage,
    vote_average,
    poster_path,
    genres,
  } = movie;
  return (
    <article>
      <Row>
        <Col md={5}>
          <MovieThumbnail uri={poster_path} />
        </Col>
        <Col md={7}>
          <MovieHeader
            title={title}
            votesAverage={vote_average}
            genres={genres}
          />
          <MovieBody content={overview} />

          <MovieDetail
            productionsCompanies={production_companies}
            productionsCountries={production_countries}
            releaseDate={release_date}
            languages={spoken_languages}
            imdbId={imdb_id}
            homepage={homepage}
          />
        </Col>
      </Row>
    </article>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const movie = await getMovie(params.id);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
}

export default MovieSingle;
