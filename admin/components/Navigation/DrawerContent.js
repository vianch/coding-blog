import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

/* Core */
import { blogAdminLinks, blogImages, blogUserLinks } from '~/core/constants';

/* Component */
import DrawerItem from '~/components/Navigation/DrawerItem';

/* Styles */
import { navigationStyles } from '~/components/Navigation/styles/Navigation.styles';

const DrawerContent = () => {
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
      </List>
    </>
  );
};

export default DrawerContent;
