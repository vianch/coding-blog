import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';

/* Theme */
import { materialTheme } from '../theme';

/* Custom components */
import { Footer, TopBar, CssBaseline } from '../components';

const NextPage = ({ Component, pageProps }) => {
  const removeServerCSS = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  };

  useEffect(() => {
    removeServerCSS();
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>

      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <TopBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

NextPage.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

NextPage.defaultProps = {
  pageProps: {},
};

export default NextPage;
