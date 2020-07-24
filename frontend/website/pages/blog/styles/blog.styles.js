import { makeStyles, createStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const blogStyles = makeStyles(() =>
  createStyles({
    root: {
      fontSize: fontSizes.medium,
      display: 'flex',
      height: 'auto',
      minHeight: 'calc(100vh - 15.2rem)',
      flexFlow: 'column nowrap',
    },

    about: {
      padding: '2.5rem 0',
      display: 'flex',
    },

    tagsSection: {
      margin: '2.5rem 0',
    },
  }),
);
