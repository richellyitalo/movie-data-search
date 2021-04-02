import Searcher from '../searcher/searcher';
import css from './layout.module.css';
import { Container, Row, Col } from 'react-grid-system';
import Link from 'next/link';

function Layout(props) {
  return (
    <Container className={css.layout}>
      <Row>
        <Col md={3}>
          <Link href="/">
            <a className={css.logo}>
              MDS
              <small className={css.logo_text}>Movie data search</small>
            </a>
          </Link>
        </Col>
        <Col md={6}>
          <Searcher />
        </Col>
        <Col md={3}>
          <a
            href="http://github.com/richellyitalo"
            target="_blank"
            className={css.developed}
          >
            by @richellyitalo
          </a>
        </Col>
      </Row>
      <div className={css.main}>{props.children}</div>
    </Container>
  );
}

export default Layout;
