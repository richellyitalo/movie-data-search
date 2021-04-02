import MovieImage from '../ui/movie-image';
import css from './movie-detail.module.css';
import MovieThumbnail from './movie-thumbnail';

function MovieDetail(props) {
  const {
    productionsCountries,
    productionsCompanies,
    releaseDate,
    languages,
    imdbId,
    homepage,
  } = props;

  const optionsDateReadable = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const releaseDateHumanReadable = new Date(releaseDate).toLocaleString(
    'en-US',
    optionsDateReadable
  );

  const languagesHTML = languages
    .map(({ english_name }) => english_name)
    .join(', ');

  const productionsHTML = productionsCompanies.map((company) =>
    company.logo_path ? (
      <span>
        <MovieImage
          className={css.company_image}
          src={company.logo_path}
          height={40}
          alt={company.name}
        />
        <br />
      </span>
    ) : (
      company.name
    )
  );

  const productionsCountriesHTML = productionsCountries
    .map((production) => production.name)
    .join(', ');

  return (
    <>
      <h2>Details</h2>

      <table
        class={`bp3-html-table bp3-html-table-striped ${css.table_details}`}
      >
        <tbody>
          <tr>
            <td>
              <b>Release Date</b>
            </td>
            <td>{releaseDateHumanReadable}</td>
          </tr>

          <tr>
            <td>
              <b>Languages</b>
            </td>
            <td>{languagesHTML}</td>
          </tr>

          <tr>
            <td>
              <b>Country Production</b>
            </td>
            <td>{productionsCountriesHTML}</td>
          </tr>

          {homepage && (
            <tr>
              <td>
                <b>Homepage</b>
              </td>
              <td>
                <a href={homepage} target="_blank">
                  {homepage}
                </a>
              </td>
            </tr>
          )}

          {imdbId && (
            <tr>
              <td>
                <b>IMDb</b>
              </td>
              <td>
                <a
                  href={`https://www.imdb.com/title/${imdbId}`}
                  target="_blank"
                >
                  <img src="/img/imdb-logo.svg" />
                </a>
              </td>
            </tr>
          )}

          <tr>
            <td>
              <b>Companies</b>
            </td>
            <td>{productionsHTML}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MovieDetail;
