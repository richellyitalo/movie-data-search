import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout/layout';
import { AppWrapper } from '../context/query-search';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
