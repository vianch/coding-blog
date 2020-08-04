import { useState, useEffect } from 'react';
import get from 'lodash/get';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

/* Constants */
import { httpCodes } from '~/core';

/* Styles */
import { homeStyles } from '~/pages/styles/home.styles';

/* Services */
import { homeApi } from '~/services/api';

/* Components */
import { HeaderInfo, Posts, MetaHead, ProjectList } from '~/components';

const Home = () => {
  const classes = homeStyles();
  const [homePost, setHomePost] = useState([]);
  const [homeProjects, setHomeProjects] = useState([]);
  const metaTags = [
    {
      name: 'description',
      content:
        'Front-end, application Developer and photographer based in Bogotá coding blog.',
    },
  ];

  const loadPostsData = () => {
    homeApi.getHomePostData(5).then((postsResponse) => {
      let postsData = [];

      if (postsResponse && postsResponse.status === httpCodes.ok) {
        postsData = get(postsResponse, 'payload.data', []);
      }

      setHomePost(postsData);
    });
  };

  const loadProjectsData = () => {
    homeApi.getProjectsData().then((projectResponse) => {
      let projectsData = [];

      if (projectResponse && projectResponse.status === httpCodes.ok) {
        projectsData = get(projectResponse, 'payload.data', []);
      }

      setHomeProjects(projectsData);
    });
  };

  useEffect(() => {
    loadPostsData();
    loadProjectsData();
  }, []);

  return (
    <Container
      className={clsx(classes.root, classes.noMargin)}
      maxWidth={false}
    >
      <MetaHead metaData={metaTags} title="Coding Blog" />

      <HeaderInfo
        isFullWidth
        subtitle=" A full stack software / application developer and photographer based
            in Bogotá."
        title={`Hi, I'm VIANCH. I help people learn software development.`}
      />

      <Container maxWidth="md">
        <Grid className={classes.about} container spacing={0}>
          {homePost && homePost.length > 0 && (
            <Posts enableViewAll posts={homePost} title="Latest Posts" />
          )}

          {homePost && homePost.length > 0 && (
            <Posts enableViewAll posts={homePost} title="Popular Posts" />
          )}

          {homeProjects && homeProjects.length > 0 && (
            <ProjectList projects={homeProjects} title="Projects" />
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
