import Head from 'next/head';

/* Components */
import { SignInForm } from '~/components';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Admin</title>
      </Head>
      <SignInForm onSubmit={() => true} />
    </>
  );
};

export default Login;
