import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* Styles */
import { HeaderInfoStyles } from '~/components/Posts/styles/Post.styles';

/* Models */
import { PostPropTypes } from '~/models';

/* Utils */
import { timeStampToDate } from '~/utils/date.utils';

/* Components */
import PostItem from '~/components/Posts/PostItem';

const Posts = ({ posts, title, enableViewAll }) => {
  const classes = HeaderInfoStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.postContainer}>
        <div className={classes.titleWrapper}>
          <h2 className={classes.title}>{title}</h2>

          {enableViewAll && (
            <Button
              color="primary"
              disableElevation
              href="/blog"
              size="medium"
              variant="contained"
            >
              View all
            </Button>
          )}
        </div>

        <List className={classes.postListWrapper}>
          {posts.map((post) => (
            <div key={`id_${post.id}`}>
              <PostItem
                date={timeStampToDate(post.dateTimestamp)}
                image={post.thumbnailImageUrl}
                title={post.title}
                url={post.urlTitle}
              />
              <Divider component="li" variant="inset" />
            </div>
          ))}
        </List>
      </div>
    </Grid>
  );
};

Posts.propTypes = {
  enableViewAll: PropTypes.bool,
  posts: PropTypes.arrayOf(PostPropTypes),
  title: PropTypes.string.isRequired,
};

Posts.defaultProps = {
  enableViewAll: false,
  posts: [],
};

export default Posts;
