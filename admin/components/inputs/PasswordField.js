import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';

/* Components */
import PasswordInputAdornment from '~/components/inputs/PasswordInputAndorments';
import {
  isEmptyField,
  isInvalidPassword,
  setCaretPosition,
  validateInputText,
} from '~/utils/form.utils';

const PasswordField = ({ name, id, label, helperText, errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const revealId = 'reveal-password-button';

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    const passwordElement = passwordRef.current.querySelector('input');

    // Put the caret cursor at the end of the input string typed
    setCaretPosition(passwordElement, 0);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const validatePasswordField = value => {
    let errorMessage = null;

    if (isEmptyField(value)) {
      errorMessage = 'Password required';
    } else if (isInvalidPassword(value)) {
      errorMessage = 'Invalid password';
    }

    return errorMessage;
  };

  return (
    <Field
      InputProps={PasswordInputAdornment(
        errors[name],
        revealId,
        touched[name],
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
      )}
      component={TextField}
      fullWidth
      helperText={validateInputText(name, errors, touched, helperText)}
      id={id}
      innerRef={passwordRef}
      label={label}
      name={name}
      type={showPassword ? 'text' : 'password'}
      validate={validatePasswordField}
    />
  );
};

PasswordField.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  helperText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: PropTypes.shape({
    password: PropTypes.bool,
  }),
};

PasswordField.defaultProps = {
  helperText: '',
  errors: null,
  touched: null,
};

export default PasswordField;
