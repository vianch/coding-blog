import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import { topBarStyles } from '~/components/TopBar/styles/TopBar.styles';

const TopBar = () => {
  const classes = topBarStyles();

  return (
    <header>
      <AppBar elevation={0} position="static">
        <Toolbar variant="dense">
          <Container>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Link className={classes.blogName} href="/">
                  <img
                    alt="avatar"
                    height="40"
                    src="/assets/images/avatar.png"
                  />
                  <span>VIANCH BLOG</span>
                </Link>
              </Grid>

              <Grid className={classes.mainLinkContainer} item xs={6}>
                <Link className={classes.mainLink} href="/blog">
                  Blog
                </Link>
                <Link className={classes.mainLink} href="/about">
                  About
                </Link>
                <Link className={classes.mainLink} href="/contact">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default TopBar;
