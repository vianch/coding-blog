import PropTypes from 'prop-types';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';

/* Components */
import TextInputAdornment from '~/components/inputs/TextInputAndorment';
import {
  isEmptyField,
  isValidEmail,
  validateInputText,
} from '~/utils/form.utils';

const EmailField = ({
  name,
  id,
  label,
  errors,
  touched,
  isNotValidReduxData,
}) => {
  const validateEmailField = value => {
    let errorMessage = null;

    if (!isValidEmail(value)) {
      errorMessage = 'Invalid email.';
    }

    if (isEmptyField(value)) {
      errorMessage = 'Email is required.';
    }

    if (isNotValidReduxData()) {
      errorMessage = 'Invalid email or password';
    }

    return errorMessage;
  };

  return (
    <Field
      InputProps={TextInputAdornment(errors[name], touched[name])}
      color="primary"
      component={TextField}
      fullWidth
      helperText={validateInputText(name, errors, touched)}
      id={id}
      label={label}
      name={name}
      type="email"
      validate={validateEmailField}
    />
  );
};

EmailField.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  isNotValidReduxData: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: PropTypes.shape({
    email: PropTypes.bool,
  }),
};

EmailField.defaultProps = {
  isNotValidReduxData: () => false,
  errors: null,
  touched: null,
};
export default EmailField;
