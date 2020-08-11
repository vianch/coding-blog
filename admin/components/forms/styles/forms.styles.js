import { makeStyles } from '@material-ui/core/styles';

import palette from "~/theme/palette";
import fontSizes from "~/theme/fontSizes";

export const formsStyles = makeStyles(theme => ({
  root: {
    width: '32rem',
    height: 'auto',
    display: 'flex',
    margin: '2.5rem auto',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '0 1.5rem',
    },
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column nowrap',
    width: '100%',
  },

  logo: {
    marginBottom: '1.5rem',
    fontSize: fontSizes.small,
  },

  fieldContainer: {
    marginBottom: '1.5rem',
    width: '100%',
  },

  buttonContainer: {
    width: '100%',
    padding: 0,
    marginTop: '1.5rem',
  },

  sendButton: {
    width: '100%',
  },

  responseError: {
    marginTop: '2rem',
    color: palette.red,
    fontSize: fontSizes.normal,
  },
}));
