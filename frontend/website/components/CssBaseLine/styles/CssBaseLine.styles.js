import { makeStyles, createStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const useStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    '@global': {
      h3: {
        [breakpoints.down('xs')]: {
          fontSize: fontSizes.large,
        },
      },
    },
  }),
);
