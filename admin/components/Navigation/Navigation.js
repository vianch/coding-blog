import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

/* Styles */
import { navigationStyles } from '~/components/Navigation/styles/Navigation.styles';

/* Components */
import DrawerContent from '~/components/Navigation/DrawerContent';
import authActions from "~/services/auth/state/auth.actions";
import { redirectToLoginPage } from "~/utils/router.utils";

export const Navigation = ({ mobileOpen, onDrawerToggle }) => {
  const classes = navigationStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    const response = await dispatch(authActions.logOut());
    if (response) {
      redirectToLoginPage();
    }
  };

  return (
    <nav aria-label="mailbox folders" className={classes.root}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden implementation="css" xsUp>
        <Drawer
          ModalProps={{ keepMounted: true }}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          open={mobileOpen}
          variant="temporary"
          onClose={onDrawerToggle}
        >
          <DrawerContent onLogout={handleLogOut} />
        </Drawer>
      </Hidden>

      <Hidden implementation="css" smDown>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          open
          variant="permanent"
        >
          <DrawerContent onLogout={handleLogOut} />
        </Drawer>
      </Hidden>
    </nav>
  );
};

Navigation.propTypes = {
  mobileOpen: PropTypes.bool,
  onDrawerToggle: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  mobileOpen: false,
};

export default Navigation;
