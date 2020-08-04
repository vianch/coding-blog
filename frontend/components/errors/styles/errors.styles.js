import { createStyles, makeStyles } from '@material-ui/core/styles';

import palette from '~/theme/palette';
import fontSizes from '~/theme/fontSizes';

export const errorsStyles = makeStyles(() =>
  createStyles({
    wrapperError404: {
      width: '100vw',
      padding: '4rem',
    },

    wrapperError500: {
      background: palette.veryDarkGray,
      height: '100vh',
      padding: '4rem 1.5rem',
      width: '100vw',
      position: 'fixed',
      top: 0,
      lef: 0,
      zIndex: 5,
    },

    paper: {
      padding: '4rem',
      textAlign: 'center',
      color: palette.veryDarkGray,
    },

    errorTitle: {
      fontWeight: '700',
      fontSize: fontSizes.xxlarge,
      marginBottom: '2rem',
    },

    errorDescription: {
      fontWeight: '500',
      fontSize: fontSizes.large,
      margin: '0 auto 2rem',
      maxWidth: '50rem',
    },

    errorType: {
      fontWeight: '500',
      fontSize: fontSizes.large,
      fontStyle: 'italic',
    },
  }),
);
