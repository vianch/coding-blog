import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { MetaHead } from '~/components';

const BlogByTitle = () => {
  const classes = homeStyles();
  const metaTags = [
    {
      name: 'description',
      content:
        'This meta description will be pulled from our backend REST API when we have it build later',
    },
  ];

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead metaData={metaTags} title="MY BLOG POST TITLE" />
      <Grid className={classes.about} container direction="column" spacing={0}>
        <h2>MY BLOG POST TITLE GOES HERE</h2>

        <div className="blog-post-top-meta">
          <span>5/1/2020</span>

          <div>
            <Button
              color="primary"
              disableElevation
              size="medium"
              variant="contained"
            >
              Tag 1
            </Button>

            <Button
              color="primary"
              disableElevation
              size="medium"
              variant="contained"
            >
              Tag 2
            </Button>

            <Button
              color="primary"
              disableElevation
              size="medium"
              variant="contained"
            >
              Tag 3
            </Button>
          </div>
        </div>

        <div>
          <p>Blog post content will go here!</p>
        </div>
      </Grid>
    </Container>
  );
};

export default BlogByTitle;
