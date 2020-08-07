import { useEffect } from 'react';
import Head from 'next/head';
import get from 'lodash/get';
import { useDispatch } from 'react-redux';

// Services
import authActions from '../../services/auth/state/auth.actions';

/* Utils */
import { redirectHomePage } from "~/utils/router.utils";

/* Components */
import { SignInForm, useIsAuthenticated } from '~/components';

const Login = () => {
  const dispatch = useDispatch();
  const isAlreadyLoggedIn = useIsAuthenticated();
  const handleSubmit = async values => {
    const response = await dispatch(authActions.logIn(values));
    const isLoginSuccess = get(response, 'payload.success', false);

    if (isLoginSuccess) {
     redirectHomePage();
    }

    return response;
  };

  useEffect(() => {
    redirectHomePage();
  }, [isAlreadyLoggedIn]);

  return (
    <>
      <Head>
        <title>Login | Admin</title>
      </Head>
      {!isAlreadyLoggedIn && <SignInForm onSubmit={handleSubmit} />}
    </>
  );
};

export default Login;
