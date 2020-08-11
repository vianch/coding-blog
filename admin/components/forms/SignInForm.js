import { useState } from 'react';
import { Formik, Form } from 'formik';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import get from 'lodash/get';

/* Core */
import { blogImages } from '~/core/constants';

/* Utils */
import { isFormButtonDisabled } from '~/utils/form.utils';

/* Components */
import { PasswordField, EmailField } from '~/components/inputs';

/* Styles */
import { formsStyles } from '~/components/forms/styles/forms.styles';

const SignInForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isLoginError, setIsLoginError] = useState(false);
  const classes = formsStyles();
  const emailField = 'email';

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setFormValues(values);

    const response = await onSubmit(values);
    setIsLoginError(!get(response, 'payload.success', false));

    setSubmitting(false);
  };

  const handleChange = ({ target }) => {
    if (isLoginError) {
      setIsLoginError(false);
    }

    if (target.name === emailField) {
      setFormValues({ email: target.value });
    }
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={formValues}
        validateOnMount
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={classes.form} onChange={handleChange}>
            <div className={classes.logo}>
              <img height={50} src={blogImages.avatar} />
              <h2>Sign In</h2>
            </div>

            <div className={classes.fieldContainer}>
              <EmailField
                errors={errors}
                id="sign-in-email-field"
                label="Email"
                name={emailField}
                touched={touched}
              />
            </div>

            <div className={classes.fieldContainer}>
              <PasswordField
                errors={errors}
                id="sign-in-password-field"
                label="Password"
                name="password"
                touched={touched}
              />
            </div>
            <CardActions className={classes.buttonContainer}>
              <Button
                className={classes.sendButton}
                color="primary"
                disableElevation
                disabled={
                  isFormButtonDisabled(isSubmitting, errors) || isLoginError
                }
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </CardActions>

            {isLoginError && (
              <div className={classes.responseError}>
                Invalid email or password
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
