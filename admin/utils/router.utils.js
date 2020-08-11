import Router from 'next/router';

export const redirectHomePage = () => {
  Router.replace("/", "/?loggedIn", { shallow: true });
};

export const redirectToLoginPage = () => {
  return Router.replace("/login", "/login", { shallow: true });
};
