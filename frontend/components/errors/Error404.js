import Grid from '@material-ui/core/Grid';

/* Custom components */
import ErrorContent from '~/components/errors/ErrorContent';

/* Styles */
import { errorsStyles } from '~/components/errors/styles/errors.styles';

const Error404 = () => {
  const classes = errorsStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.wrapperError404}
      container
      justify="center"
    >
      <ErrorContent
        description="Oops! Looks like this page doesn’t exist!"
        errorCode={404}
        title="Page not found"
      />
    </Grid>
  );
};

export default Error404;
