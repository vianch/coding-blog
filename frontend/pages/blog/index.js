import { useEffect, useState } from 'react';
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
import { MetaHead, Posts } from '~/components';

const Blog = () => {
  const classes = homeStyles();
  const [allPosts, setAllPost] = useState([]);
  const metaTags = [
    {
      name: 'description',
      content: 'List of all blog posts published on the coding blog.',
    },
  ];

  const loadAllPostData = () => {
    postApi.getAllBlogPost().then((postsResponse) => {
      let postsData = [];

      if (postsResponse && postsResponse.status === httpCodes.ok) {
        postsData = get(postsResponse, 'payload.data', []);
      }

      setAllPost(postsData);
    });
  };

  useEffect(() => {
    loadAllPostData();
  }, []);

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead metaData={metaTags} title="Blog Posts | Coding Blog" />
      <Grid className={classes.about} container spacing={0}>
        <Posts posts={allPosts} title="BLOG" />
      </Grid>
    </Container>
  );
};

export default Blog;
