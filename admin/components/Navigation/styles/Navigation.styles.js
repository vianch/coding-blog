import { makeStyles } from '@material-ui/core/styles';
import fontSizes from '~/theme/fontSizes';
import palette from '~/theme/palette';

const drawerWidth = 240;

export const navigationStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '6.3rem',
    alignItems: 'center',
  },
  headerTextContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  headerTitle: {
    fontSize: fontSizes.medium,
    margin: 0,
    padding: 0,
    color: palette.deeper,
    fontWeight: 'bold',
  },
  headerRole: {
    fontSize: fontSizes.small,
    margin: 0,
    padding: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
