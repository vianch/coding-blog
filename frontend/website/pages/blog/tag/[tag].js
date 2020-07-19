import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { MetaHead, Posts } from '~/components';

const Blog = ({ tag }) => {
  const classes = homeStyles();
  const title = 'Posts tagged';
  const [postTitle, setPostTitle] = useState(title);
  const metaTags = [
    {
      name: 'description',
      content: `All blog posts tagged as "${tag}".`,
    },
  ];

  useEffect(() => {
    if (tag) {
      setPostTitle(`${title} as ${tag}`);
    }
  }, [tag]);

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead
        metaData={metaTags}
        title={`Blog posts tagged as "${tag}" | Coding Blog`}
      />
      <Grid className={classes.about} container spacing={0}>
        <Posts title={postTitle} />
      </Grid>
    </Container>
  );
};

Blog.propTypes = {
  tag: PropTypes.string.isRequired,
};

Blog.getInitialProps = async ({ query }) =>
  query && query.tag ? { tag: query.tag } : null;

export default Blog;
