import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import get from 'lodash/get';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Services */
import { postApi } from '~/services/api';

/* Constants */
import { httpCodes } from '~/core';

/* Components */
import { MetaHead, Posts, ErrorContent } from '~/components';

const Blog = ({ tag }) => {
  const classes = homeStyles();
  const title = 'Posts tagged';
  const [postTitle, setPostTitle] = useState(title);
  const [postsByTag, setPostByTag] = useState(null);
  const metaTags = [
    {
      name: 'description',
      content: `All blog posts tagged as "${tag}".`,
    },
  ];

  const loadAllPostByTag = (urlTag) => {
    postApi.getBlogByTag(urlTag).then((postsResponse) => {
      let postsData = [];

      if (postsResponse && postsResponse.status === httpCodes.ok) {
        postsData = get(postsResponse, 'payload.data', []);
      }

      setPostByTag(postsData);
    });
  };

  useEffect(() => {
    if (tag) {
      setPostTitle(`${title} as ${tag}`);
      loadAllPostByTag(tag);
    }
  }, [tag]);

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead
        metaData={metaTags}
        title={`Blog posts tagged as "${tag}" | Coding Blog`}
      />

      {postsByTag && postsByTag.length > 0 && (
        <Grid className={classes.about} container spacing={0}>
          <Posts posts={postsByTag} title={postTitle} />
        </Grid>
      )}

      {postsByTag && postsByTag.length === 0 && (
        <Grid className={classes.about} container justify="center">
          <ErrorContent
            description="There have been no posts in this section yet."
            errorCode={httpCodes.notDataAvailable}
            title={`No posts available by ${tag}`}
          />
        </Grid>
      )}
    </Container>
  );
};

Blog.propTypes = {
  tag: PropTypes.string.isRequired,
};

Blog.getInitialProps = async ({ query }) =>
  query && query.tag ? { tag: query.tag } : null;

export default Blog;
