import { makeStyles, createStyles } from '@material-ui/core/styles';
import palette from '~/theme/palette';
import fontSizes from '~/theme/fontSizes';

export const topBarStyles = makeStyles(() =>
  createStyles({
    blogName: {
      color: palette.white,
      display: 'flex',
      alignItems: 'center',
      fontSize: fontSizes.medium,
      maxWidth: '15rem',

      '&:hover': {
        textDecoration: 'none',
      },
    },

    mainLinkContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    mainLink: {
      color: palette.white,
      fontSize: fontSizes.medium,
      marginLeft: '1rem',
    },
  }),
);
