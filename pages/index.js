import { getUpcomingMovies } from '../services/movies';
import MovieList from '../components/movie/movie-list';

export default function Home(props) {
  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieList items={props.movies} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getUpcomingMovies();

  return {
    props: {
      movies: data
    },
    revalidate: 120
  };
}
