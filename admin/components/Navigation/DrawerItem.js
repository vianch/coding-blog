import PropTypes from 'prop-types';

/* Components */
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '~/components/ListItemLink/ListItemLink';

const DrawerItem = ({ name, link, DrawerItemIcon, onClick }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <DrawerItemIcon />
      </ListItemIcon>
      <ListItemLink href={link}>
        <ListItemText primary={name} onClick={onClick} />
      </ListItemLink>
    </ListItem>
  );
};

DrawerItem.propTypes = {
  DrawerItemIcon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

DrawerItem.defaultProps = {
  onClick: null,
  link: null,
};

export default DrawerItem;
