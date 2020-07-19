import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { MetaHead, Posts } from '~/components';

const Blog = () => {
  const classes = homeStyles();
  const metaTags = [
    {
      name: 'description',
      content: 'List of all blog posts published on the coding blog.',
    },
  ];

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead metaData={metaTags} title="Blog Posts | Coding Blog" />
      <Grid className={classes.about} container spacing={0}>
        <Posts title="BLOG" />
      </Grid>
    </Container>
  );
};

export default Blog;
