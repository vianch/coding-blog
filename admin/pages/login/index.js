import { useEffect } from 'react';
import Head from 'next/head';
import get from 'lodash/get';
import { useDispatch } from 'react-redux';

// Services
import authActions from '../../services/auth/state/auth.actions';

/* Utils */
import { redirectHomePage } from "~/utils/router.utils";

/* Components */
import { SignInForm } from '~/components';
import authApi from "~/services/auth/auth.api";

const Login = ({cookie}) => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    const response = await dispatch(authActions.logIn(values));
    const isLoginSuccess = get(response, 'payload.success', false);

    if (isLoginSuccess) {
      redirectHomePage();
    }

    return response;
  };

  const loadAuth = () => {
    authApi.requestAuthentication(cookie).then(response => {
      // console.log('AUTH Response: ', response);
    });

  }

  useEffect(() => {
    loadAuth();
  }, []);

  return (
    <>
      <Head>
        <title>Login | Admin</title>
      </Head>
      <SignInForm onSubmit={handleSubmit} />
    </>
  );
};

Login.getInitialProps = (props) => {
  const cookie = get(props, 'req.headers.cookie', 'SIN COOKIE');

  return {
    cookie
  }
};

export default Login;
