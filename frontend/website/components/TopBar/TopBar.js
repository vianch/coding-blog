import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

/* Constants */
import { blogLinks, blogImages } from '~/core';

/* Styles */
import { topBarStyles } from '~/components/TopBar/styles/TopBar.styles';

const TopBar = () => {
  const classes = topBarStyles();
  const { blog, about, contact } = blogLinks;

  return (
    <header>
      <AppBar elevation={0} position="static">
        <Toolbar variant="dense">
          <Container>
            <Grid container spacing={0}>
              <Hidden only="xs">
                <Grid item xs={6}>
                  <Link className={classes.blogName} href="/">
                    <img alt="avatar" height="40" src={blogImages.avatar} />
                    <span>VIANCH BLOG</span>
                  </Link>
                </Grid>
              </Hidden>

              <Grid className={classes.mainLinkContainer} item sm={6} xs={12}>
                <Link className={classes.mainLink} href={blog.link}>
                  {blog.name}
                </Link>
                <Link className={classes.mainLink} href={about.link}>
                  {about.name}
                </Link>
                <Link className={classes.mainLink} href={contact.link}>
                  {contact.name}
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
