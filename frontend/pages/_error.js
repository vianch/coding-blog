import PropTypes from 'prop-types';
import get from 'lodash/get';

/* Constants */
import { httpCodes } from '~/core';

/* Custom components */
import { Error404, Error500, ErrorContent } from '~/components';

const Error = ({ statusCode }) => {
  if (statusCode === httpCodes.notFoundError) {
    return <Error404 />;
  } else if (statusCode === httpCodes.serverError) {
    return <Error500 />;
  } else {
    return (
      <ErrorContent
        description="Something went wrong, please try again."
        errorCode={statusCode}
        title="An error occurred"
      />
    );
  }
};

Error.getInitialProps = ({ response, error }) => {
  const responseStatusCode = get(response, 'statusCode');
  const errorStatusCode = get(error, 'statusCode', 404);
  const statusCode = responseStatusCode || errorStatusCode;

  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
