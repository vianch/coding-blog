import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/* Styles */
import { appBarStyles } from '~/components/AdminAppBar/styles/AdminAppBar.styles';

const AdminAppBar = ({ onDrawerToggle }) => {
  const classes = appBarStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          className={classes.menuButton}
          color="inherit"
          edge="start"
          onClick={onDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <h6 className={classes.barTitle}>Blog Admin</h6>
      </Toolbar>
    </AppBar>
  );
};

AdminAppBar.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default AdminAppBar;
