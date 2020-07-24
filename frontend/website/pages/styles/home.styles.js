import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const homeStyles = makeStyles(() => ({
  root: {
    fontSize: fontSizes.medium,
    display: 'flex',
    height: 'auto',
    minHeight: 'calc(100vh - 15.2rem)',
    flexFlow: 'column nowrap',
  },

  noMargin: {
    margin: 0,
    padding: 0,
  },

  about: {
    padding: '2.5rem 0',
    display: 'flex',
  },
}));
