import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/* Constants */
import { blogImages } from '~/core';

/* Styles */
import { AvatarInfoStyles } from '~/components/AvatarInfo/styles/AvatarInfo.styles';

const AvatarInfo = () => {
  const classes = AvatarInfoStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.avatarSection}>
        <Hidden only="xs">
          <img height={150} src={blogImages.avatar} />
        </Hidden>

        <div className={classes.avatarTextSection}>
          <h2 className={classes.avatarTitle}>
            Hi, I&apos;m VIANCH. I help people learn software development.
          </h2>
          <p className={classes.avatarDescription}>
            A full stack software / application developer and photographer based
            in Bogotá.
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default AvatarInfo;
