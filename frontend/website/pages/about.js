import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { aboutStyles } from '~/pages/styles/about.styles';

/* Components */
import { MetaHead } from '~/components';

const About = () => {
  const classes = aboutStyles();
  const metaTags = [
    {
      name: 'description',
      content:
        'Front-end, application Developer and photographer based in Bogotá.',
    },
  ];

  return (
    <Container maxWidth="md">
      <MetaHead metaData={metaTags} title="About Me | Coding Blog" />
      <Grid alignItems="flex-start" container direction="column">
        <div className={classes.aboutMeSection}>
          <h2 className={classes.aboutMeTitle}>About me</h2>

          <p className={classes.aboutMeText}>
            Front-end, application Developer and photographer based in Bogotá.
            Owner at http://vianch.com and Developer at Zagalabs and TodayTix
          </p>
        </div>

        <div className={classes.aboutUsingSection}>
          <h2 className={classes.aboutMeTitle}>Currently Using</h2>
          <ul className={classes.aboutUsingList}>
            <li className={classes.aboutUsingListItem}>
              <strong>Computer OS</strong>: macOS Catalina
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Hosting</strong>:{' '}
              <a href="https://m.do.co/c/ce20017d8588">DigitalOcean</a> /{' '}
              <a href="https://aws.amazon.com/">AWS</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Editor</strong>:{' '}
              <a href="https://www.jetbrains.com/es-es/webstorm/">WebStorm</a> /{' '}
              <a href="https://code.visualstudio.com/">Vistual Studio</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Coding Frameworks</strong>:{' '}
              <a href="https://nextjs.org">Next.js</a> /{' '}
              <a href="https://angular.io/">Angular</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Styling Framework</strong>:{' '}
              <a href="https://material-ui.com/">Material-UI</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Version Control</strong>:{' '}
              <a href="https://github.com/vianch">GitHub</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>Unit test</strong>: <a href="https://jestjs.io/">Jest</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>UI Component tool</strong>:{' '}
              <a href="https://storybook.js.org/">StoryBook</a>
            </li>
            <li className={classes.aboutUsingListItem}>
              <strong>PaaS</strong>:{' '}
              <a href="https://www.docker.com/">Docker</a>
            </li>
          </ul>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
