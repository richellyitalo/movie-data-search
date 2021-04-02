import { Spinner } from '@blueprintjs/core';
import { useEffect } from 'react';
import MovieList from '../../../components/movie/movie-list';
import { useAppContext } from '../../../context/query-search';
import { searchMovies } from '../../../services/movies';
import styles from './search.module.css';

const AlertNotFoundMovie = () => (
  <div class="bp3-callout bp3-intent-warning">
    <h4 class="bp3-heading">Sorry. No movies found!</h4>
    Change your search term.
  </div>
);

const Head = ({ lengthMovieFound, slug }) => (
  <div className={`${styles.info_query} bp3-callout bp3-intent-primary`}>
    <b>{lengthMovieFound} movies</b> found of your searching for <b>{slug}</b>
  </div>
);

function Search(props) {
  const { querySearch, setQuerySearch } = useAppContext();

  const { movies, slug } = props;

  useEffect(() => {
    setQuerySearch(slug);
  }, []);

  return (
    <div>
      <Head lengthMovieFound={movies.length} slug={querySearch} />

      {movies.length === 0 ? (
        <AlertNotFoundMovie />
      ) : (
        <MovieList items={props.movies} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const moviesFound = await searchMovies(slug);

  return {
    props: {
      movies: moviesFound,
      slug: slug,
      isLoading: false,
    },
  };
}

export default Search;
