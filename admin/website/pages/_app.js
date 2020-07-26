import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';

/* Theme */
import { materialTheme } from '../theme';

/* Custom components */
import {
  AdminAppBar,
  CssBaseline,
  MainContainer,
  Navigation,
} from '../components';

const NextPage = ({ Component, pageProps }) => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const removeServerCSS = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    setIsLoggedIn(false);
    removeServerCSS();
  }, []);

  return (
    <>
      <Head>
        <title>Blog Admin</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>

      <ThemeProvider theme={materialTheme}>
        <CssBaseline />

        {!isLoggedIn && <Component {...pageProps} />}
        {isLoggedIn && (
          <>
            <AdminAppBar onDrawerToggle={handleDrawerToggle} />
            <Navigation
              mobileOpen={isMobileOpen}
              onDrawerToggle={handleDrawerToggle}
            />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </>
        )}
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
