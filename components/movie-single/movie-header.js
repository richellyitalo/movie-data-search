import css from './movie-header.module.css';

const Votes = ({ votesAverage }) => {
  let backgroundColor = '#148912';

  if (votesAverage <= 5) {
    backgroundColor = 'tomato';
  }

  if (votesAverage > 5 && votesAverage < 8) {
    backgroundColor = '#ffa500';
  }

  return (
    <p className={`${css.votes}`} style={{ background: backgroundColor }}>
      {votesAverage}
    </p>
  );
};

function MovieHeader(props) {
  const { title, votesAverage, genres } = props;

  const genresHTML = genres.map(({name}) => (name)).join(`, `);

  return (
    <>
      <h1 className={css.title}>{title}</h1>

      <p className={css.genres}>{genresHTML}</p>
      
      <Votes votesAverage={votesAverage} />
    </>
  );
}

export default MovieHeader;
