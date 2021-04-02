import MovieImage from "../ui/movie-image";

import css from './movie-thumbnail.module.css';

function MovieThumbnail(props) {
  const {uri} = props;
  return <MovieImage className={css.thumbnail} src={uri} />;
}

export default MovieThumbnail;
