import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/* Constants */
import { blogImages } from '~/core';

/* Styles */
import { HeaderInfoStyles } from '~/components/HeaderInfo/styles/HeaderInfo.styles';

const HeaderInfo = ({ title, subtitle, image, isFullWidth }) => {
  const classes = HeaderInfoStyles();
  const containerClass = isFullWidth ? classes.headerInfoContainer : '';

  return (
    <Grid className={containerClass} item xs={12}>
      <div className={classes.ImageSection}>
        <Hidden only="xs">
          <img height={150} src={image} />
        </Hidden>

        <div className={classes.headerTitleSection}>
          <h2 className={classes.headerTitle}>{title}</h2>
          <p className={classes.headerDescription}>{subtitle}</p>
        </div>
      </div>
    </Grid>
  );
};

HeaderInfo.propTypes = {
  image: PropTypes.string,
  isFullWidth: PropTypes.bool,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HeaderInfo.defaultProps = {
  image: blogImages.avatar,
  isFullWidth: false,
};

export default HeaderInfo;
