import { makeStyles, createStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const blogStyles = makeStyles(() =>
  createStyles({
    root: {
      fontSize: fontSizes.medium,
      display: 'flex',
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
