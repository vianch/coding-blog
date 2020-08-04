import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider as StoreProvider, connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

/* Theme */
import { materialTheme } from '~/theme';

/* Custom components */
import {
  AdminAppBar,
  CssBaseline,
  MainContainer,
  Navigation,
} from '../components';

/* Store */
import createStore from '~/store/createStore';

const NextPage = ({ Component, pageProps }) => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const store = createStore();

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

      <StoreProvider store={store}>
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
      </StoreProvider>
    </>
  );
};

NextPage.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
  store: PropTypes.shape({}).isRequired,
};

NextPage.defaultProps = {
  pageProps: {},
};
export default NextPage;
