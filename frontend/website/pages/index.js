import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Components */
import { AvatarInfo, Posts } from '~/components';

const Home = () => {
  const classes = homeStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid className={classes.about} container spacing={0}>
        <AvatarInfo />
        <Posts title="Latest Posts" />
      </Grid>
    </Container>
  );
};

export default Home;
