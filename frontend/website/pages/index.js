import { useState, useEffect } from 'react';
import get from 'lodash/get';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Constants */
import { httpCodes } from '~/core';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Services */
import { homeApi } from '~/services/api';

/* Components */
import { AvatarInfo, Posts, MetaHead } from '~/components';

const Home = () => {
  const classes = homeStyles();
  const [homePost, setHomePost] = useState([]);
  const metaTags = [
    {
      name: 'description',
      content:
        'Front-end, application Developer and photographer based in Bogotá coding blog.',
    },
  ];

  const loadHomeData = () => {
    homeApi.getHomePostData(5).then((postsResponse) => {
      let postsData = [];

      if (postsResponse && postsResponse.status === httpCodes.ok) {
        postsData = get(postsResponse, 'payload.data', []);
      }

      setHomePost(postsData);
    });
  };

  useEffect(() => {
    loadHomeData();
  }, []);

  return (
    <Container className={classes.root} maxWidth="md">
      <MetaHead metaData={metaTags} title="Coding Blog" />
      <Grid className={classes.about} container spacing={0}>
        <AvatarInfo />
        <Posts enableViewAll posts={homePost} title="Latest Posts" />
      </Grid>
    </Container>
  );
};

export default Home;
