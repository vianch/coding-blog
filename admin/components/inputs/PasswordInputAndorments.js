import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ErrorIcon from '@material-ui/icons/Error';

const PasswordInputAdornment = (
  error,
  id,
  touched,
  showPassword,
  onClick,
  onMouseDown,
) => {
  return {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          id={id}
          onClick={onClick}
          onMouseDown={onMouseDown}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        {error && touched ? <ErrorIcon color="error" /> : <span />}
      </InputAdornment>
    ),
  };
};

export default PasswordInputAdornment;
