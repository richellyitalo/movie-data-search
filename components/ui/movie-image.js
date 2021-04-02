function MovieImage(props) {
  const { src } = props;
  const srcImage = src ? `https://image.tmdb.org/t/p/w500/${src}`
    : '/img/movie-thumbnail.png';
  return <img {...props} src={srcImage}/>
}

export default MovieImage;