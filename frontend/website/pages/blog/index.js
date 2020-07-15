import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { Posts } from '~/components';

const Blog = () => {
  const classes = homeStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Grid className={classes.about} container spacing={0}>
        <Posts title="BLOG" />
      </Grid>
    </Container>
  );
};

export default Blog;
