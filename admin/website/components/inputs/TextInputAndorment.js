import { InputAdornment } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';

const TextInputAdornment = (error, touched) => ({
  endAdornment: (
    <InputAdornment position="end">
      {error && touched ? (
        <ErrorIcon color="error" />
      ) : !error && touched ? (
        <CheckIcon className="success" color="inherit" />
      ) : (
        <span />
      )}
    </InputAdornment>
  ),
});

export default TextInputAdornment;
