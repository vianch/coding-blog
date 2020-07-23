import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

/* Components */
import { ListItemLink } from '~/components';

const PostItem = ({ image, title, date, url }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img height={25} src={image} />
        </Avatar>
      </ListItemAvatar>
      <ListItemLink href={`${window.location.origin}/blog/${url}`}>
        <ListItemText primary={title} secondary={date} />
      </ListItemLink>
    </ListItem>
  );
};

PostItem.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostItem;
