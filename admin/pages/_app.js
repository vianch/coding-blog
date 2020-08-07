import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import get from 'lodash/get';
import { PersistGate } from 'redux-persist/integration/react';

/* Theme */
import { materialTheme } from '~/theme';

/* Custom components */
import {
  AdminAppBar,
  AuthProvider,
  CssBaseline,
  MainContainer,
  Navigation,
} from '../components';

// Services
import { authSelectors } from '~/services/auth';
import authApi from '~/services/auth/auth.api';

/* Store */
import createStore from '~/store/createStore';

const NextPage = ({ Component, pageProps, cookie }) => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cookieData, setCookieData] = useState({});

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

  const seLoggedInState = cacheResponse => {
    const shouldLoggedIn = authSelectors.isLoggedIn(
      createStore.store.getState(),
      cacheResponse,
    );

    setIsLoggedIn(shouldLoggedIn);
  };

  const loadAuth = () => {
    authApi.requestAuthentication(cookie).then(response => {
      const apiResponse = get(response, 'success');
      const withCacheData = get(response, 'payload.success');

      if (apiResponse && withCacheData) {
        const cacheResponse = get(response, 'payload.data');
        setCookieData(cacheResponse);
        seLoggedInState(cacheResponse);
      }

      setIsLoading(false);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    loadAuth();
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

      <StoreProvider store={createStore.store}>
        <PersistGate loading={isLoading} persistor={createStore.persistor}>
          <AuthProvider
            authenticated={isLoggedIn}
            authenticatedData={cookieData}
          >
            <ThemeProvider theme={materialTheme}>
              <CssBaseline />

              {!isLoggedIn && !isLoading && <Component {...pageProps} />}
              {isLoggedIn && !isLoading && (
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
          </AuthProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
};

NextPage.getInitialProps = props => {
  const cookie = get(props, 'ctx.req.headers.cookie', '');

  return { cookie };
};

NextPage.propTypes = {
  Component: PropTypes.elementType.isRequired,
  cookie: PropTypes.string.isRequired,
  pageProps: PropTypes.shape({}),
  store: PropTypes.shape({}),
};

NextPage.defaultProps = {
  pageProps: {},
  store: {},
};
export default NextPage;
