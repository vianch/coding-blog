import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { AvatarInfo, Posts, MetaHead } from '~/components';

const Home = () => {
  const classes = homeStyles();
  const metaTags = [
    {
      name: 'description',
      content:
        'Front-end, application Developer and photographer based in Bogotá coding blog.',
    },
  ];

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead metaData={metaTags} title="Coding Blog" />
      <Grid className={classes.about} container spacing={0}>
        <AvatarInfo />
        <Posts enableViewAll title="Latest Posts" />
      </Grid>
    </Container>
  );
};

export default Home;
