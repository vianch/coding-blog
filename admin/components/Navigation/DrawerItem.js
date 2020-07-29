import PropTypes from 'prop-types';

/* Components */
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '~/components/ListItemLink/ListItemLink';

const DrawerItem = ({ name, link, DrawerItemIcon }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <DrawerItemIcon />
      </ListItemIcon>
      <ListItemLink href={link}>
        <ListItemText primary={name} />
      </ListItemLink>
    </ListItem>
  );
};

DrawerItem.propTypes = {
  DrawerItemIcon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DrawerItem;
