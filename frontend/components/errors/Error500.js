import Grid from '@material-ui/core/Grid';

/* Custom components */
import ErrorContent from '~/components/errors/ErrorContent';

/* Styles */
import { errorsStyles } from '~/components/errors/styles/errors.styles';

const Error500 = () => {
  const classes = errorsStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.wrapperError500}
      container
      direction="column"
      justify="center"
    >
      <ErrorContent
        description="Something went wrong trying to load the page. We’re looking into it. Please try again in a moment."
        errorCode={500}
        title="An unexpected error occurred"
      />
    </Grid>
  );
};

export default Error500;
