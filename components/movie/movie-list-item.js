import { Col } from 'react-grid-system';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import ImageMovie from '../ui/movie-image';
import Link from 'next/link';

import css from './movie-list-item.module.css';

function MovieListItem(props) {
  const { item } = props;
  const optionsDateReadable = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  // const dateTimeFormater = new Intl.DateTimeFormat('en-US', optionsDateReadable);
  // const dateReadable = dateTimeFormater.format(new Date(item.release_date));
  // const dateReadable = item.release_date;

  // ou utilizar esse formato mais simples
  const dateReadable = new Date(item.release_date).toLocaleString(
    'en-US',
    optionsDateReadable
  );

  return (
    <Col sm={6} md={4} lg={3}>
      <Link
        href={{
          pathname: '/movies/[id]',
          query: { id: item.id, movie: item.title },
        }}
      >
        <a>
          <ImageMovie src={item.poster_path} className={css.movieitem_img} />
        </a>
      </Link>
      <h2 className={css.movieitem_title}>{item.title}</h2>
      <p>
        <Icon icon={IconNames.CALENDAR} iconSize={Icon.SIZE_LARGE} />
        &nbsp;{dateReadable}
      </p>
      <p>{item.overview}</p>
    </Col>
  );
}

export default MovieListItem;
