import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const homeStyles = makeStyles(() => ({
  root: {
    fontSize: fontSizes.medium,
    display: 'flex',
  },

  about: {
    padding: '2.5rem 0',
    display: 'flex',
  },
}));
