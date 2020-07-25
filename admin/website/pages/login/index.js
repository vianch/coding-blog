import { blogImages } from '~/core/constants';

const Login = () => {
  return (
    <form id="login-form">
      <img height={50} src={blogImages.avatar} />

      <h1>Sign In</h1>
    </form>
  );
};

export default Login;
