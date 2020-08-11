import ListAltIcon from '@material-ui/icons/ListAlt';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const blogAdminLinks = [
  {
    id: 1,
    name: 'Blog post',
    link: '/',
    icon: ListAltIcon,
  },
  {
    id: 2,
    name: 'Images',
    link: '/images',
    icon: PermMediaIcon,
  },
  {
    id: 3,
    name: 'Sitemap',
    link: '/sitemap',
    icon: AccountTreeIcon,
  },
];

export const blogUserLinks = [
  {
    id: 4,
    name: 'Profile',
    link: '/profile',
    icon: PersonIcon,
  },
  {
    id: 5,
    name: 'Preferences',
    link: '/preferences',
    icon: SettingsIcon,
  },
];

export const logOutLink =  {
    id: 6,
    name: 'Log Out',
    link: 'logout',
    icon: ExitToAppIcon,
  };

export const httpCodes = {
  created: 201,
  ok: 200,
  serverError: 500,
  badRequest: 400,
  unauthorized: 401,
  unprocessable: 422,
  notFoundError: 404,
  notDataAvailable: 412,
};

export const requestStatus = {
  error: 'error',
  fetching: 'fetch',
  success: 'success',
};

export const httpMethods = {
  delete: 'delete',
  get: 'get',
  patch: 'patch',
  post: 'post',
  put: 'put',
};

export const blogImages = {
  avatar: '/assets/images/avatar.png',
};
