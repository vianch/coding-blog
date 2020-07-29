import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/* Styles */
import { navigationStyles } from '~/components/Navigation/styles/Navigation.styles';

/* Components */
import DrawerContent from '~/components/Navigation/DrawerContent';

export const Navigation = ({ mobileOpen, onDrawerToggle }) => {
  const classes = navigationStyles();
  const theme = useTheme();

  return (
    <nav aria-label="mailbox folders" className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden implementation="css" smUp>
        <Drawer
          ModalProps={{ keepMounted: true }}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          classes={{ paper: classes.drawerPaper }}
          open={mobileOpen}
          variant="temporary"
          onClose={onDrawerToggle}
        >
          <DrawerContent />
        </Drawer>
      </Hidden>

      <Hidden implementation="css" xsDown>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          open
          variant="permanent"
        >
          <DrawerContent />
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
