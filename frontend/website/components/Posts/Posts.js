import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* Styles */
import { AvatarInfoStyles } from '~/components/Posts/styles/Post.styles';

/* Components */
import PostItem from '~/components/Posts/PostItem';

const Posts = ({ title }) => {
  const classes = AvatarInfoStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.postContainer}>
        <div className={classes.titleWrapper}>
          <h2 className={classes.title}>{title}</h2>

          <Button
            color="primary"
            disableElevation
            size="medium"
            variant="contained"
          >
            View all
          </Button>
        </div>

        <List className={classes.postListWrapper}>
          <PostItem
            date="July 20, 2014"
            image="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            title="Introduction to Git - Background, Installation, and Usage"
            url="#"
          />
          <Divider component="li" variant="inset" />

          <PostItem
            date="July 20, 2014"
            image="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"
            title="Introduction to Git - Background, Installation, and Usage"
            url="#"
          />
          <Divider component="li" variant="inset" />

          <PostItem
            date="July 20, 2014"
            image="https://assets.coderrocketfuel.com/coding-blog-react-thumbnail.png"
            title="Introduction to Git - Background, Installation, and Usage"
            url="#"
          />
          <Divider component="li" variant="inset" />

          <PostItem
            date="July 20, 2014"
            image="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"
            title="Introduction to Git - Background, Installation, and Usage"
            url="#"
          />
          <Divider component="li" variant="inset" />

          <PostItem
            date="July 20, 2014"
            image="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"
            title="Introduction to Git - Background, Installation, and Usage"
            url="#"
          />
          <Divider component="li" variant="inset" />
        </List>
      </div>
    </Grid>
  );
};

Posts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Posts;
