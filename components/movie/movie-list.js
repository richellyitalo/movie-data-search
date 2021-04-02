import { Row } from 'react-grid-system';
import MovieListItem from './movie-list-item';

function MovieList(props) {
  const { items } = props;
  return (
    <Row>
      {items.map((item) => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </Row>
  );
}

export default MovieList;
