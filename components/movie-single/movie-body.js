import css from './movie-body.module.css';

function MovieBody({content}) {
  return <div className={css.content}>
    {content}
  </div>;
}

export default MovieBody;
