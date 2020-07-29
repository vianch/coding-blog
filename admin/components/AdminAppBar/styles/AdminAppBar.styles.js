import { makeStyles } from '@material-ui/core/styles';
import fontSizes from '~/theme/fontSizes';

const drawerWidth = 240;

export const appBarStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  barTitle: {
    fontSize: fontSizes.medium,
    margin: 0,
    padding: 0,
  },
}));
