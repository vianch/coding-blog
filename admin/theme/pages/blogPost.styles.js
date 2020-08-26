import { makeStyles } from '@material-ui/core/styles';
import fontSizes from "~/theme/fontSizes";

export const blogPostStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  title: {
    fontSize: fontSizes.large,
    marginBottom: '2.5rem',
  },

  wrapper: {
    width: '100%',
    margin: '4.5rem 0',

    [theme.breakpoints.down('sm')]: {
      margin: '9.5rem 0',
    }
  },
}));
