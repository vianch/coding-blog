import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { errorsStyles } from '~/components/errors/styles/errors.styles';

/* Components */
import MetaHead from '~/components/MetaHead/MetaHead';

const ErrorContent = ({ description, errorCode, title }) => {
  const classes = errorsStyles();
  const metaTags = [
    {
      name: 'description',
      content: description,
    },
  ];

  return (
    <Grid item>
      <MetaHead metaData={metaTags} title="Error | Coding Blog" />
      <Paper className={classes.paper} elevation={0}>
        <h4 className={classes.errorTitle}>{title}</h4>
        <p className={classes.errorDescription}>{description}</p>
        <span className={classes.errorType}>Error {errorCode}</span>
      </Paper>
    </Grid>
  );
};

ErrorContent.propTypes = {
  description: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ErrorContent;
