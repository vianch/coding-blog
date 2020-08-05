import Head from 'next/head';
import get from 'lodash/get';
import { useDispatch } from 'react-redux';

// Services
import authActions from '../../services/auth/state/auth.actions';

/* Components */
import { SignInForm } from '~/components';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    const response = await dispatch(authActions.logIn(values));
    const isLoginSuccess = get(response, 'payload.success', false);
    if (isLoginSuccess) {
      // TODO: generar auth con cache y revisando que sea el mismo auth token no vencido
      console.log('SE LOGEO');
    }

    return response;
  };

  return (
    <>
      <Head>
        <title>Login | Admin</title>
      </Head>
      <SignInForm onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
