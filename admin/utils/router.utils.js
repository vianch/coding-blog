import Router from 'next/router';

export const redirectHomePage = () => {
  Router.replace("/", "/?loggedIn", { shallow: true });
};
