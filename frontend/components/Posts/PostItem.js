import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

/* Components */
import { ListItemLink, Tags } from '~/components';

const PostItem = ({ image, title, date, url, tags }) => {
  return (
    <ListItem button dense>
      <ListItemAvatar>
        <Avatar>
          <img height={25} src={image} />
        </Avatar>
      </ListItemAvatar>
      <ListItemLink href={`${window.location.origin}/blog/${url}`}>
        <ListItemText primary={title} secondary={date} />
      </ListItemLink>

      <ListItemSecondaryAction>
        <Tags customClass="" tags={tags} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

PostItem.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostItem;
