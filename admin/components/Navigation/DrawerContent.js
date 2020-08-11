import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

/* Core */
import { blogAdminLinks, blogImages, blogUserLinks, logOutLink } from '~/core/constants';

/* Component */
import DrawerItem from '~/components/Navigation/DrawerItem';

/* Styles */
import { navigationStyles } from '~/components/Navigation/styles/Navigation.styles';

const DrawerContent = ({ onLogout }) => {
  const classes = navigationStyles();

  return (
    <>
      <div className={classes.header}>
        <img height={45} src={blogImages.avatar} />

        <div className={classes.headerTextContainer}>
          <h3 className={classes.headerTitle}>VIANCH</h3>
          <span className={classes.headerRole}>Super Admin</span>
        </div>
      </div>

      <Divider />

      <List>
        { /* REmove logout from here and add another drawitem with onclick event to call api logout enpoint */}
        {blogAdminLinks.map(link => (
          <DrawerItem
            key={`link_id_${link.id}`}
            DrawerItemIcon={link.icon}
            link={link.link}
            name={link.name}
          />
        ))}
      </List>

      <Divider />

      <List>
        {blogUserLinks.map(link => (
          <DrawerItem
            key={`link_id_${link.id}`}
            DrawerItemIcon={link.icon}
            link={link.link}
            name={link.name}
          />
        ))}
        {onLogout && (<DrawerItem
          DrawerItemIcon={logOutLink.icon}
          name={logOutLink.name}
          onClick={onLogout}
        />)}
      </List>
    </>
  );
};

DrawerContent.propTypes = {
  onLogout: PropTypes.func,
};

DrawerContent.defaultProps = {
  onLogout: null,
};

export default DrawerContent;
