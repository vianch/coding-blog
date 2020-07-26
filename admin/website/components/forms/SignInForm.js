import { useState } from 'react';
import { Formik, Form } from 'formik';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

/* Core */
import { blogImages } from '~/core/constants';
import { logger } from '~/config/logger';

/* Utils */
import { isFormButtonDisabled } from '~/utils/form.utils';

/* Components */
import { PasswordField, EmailField } from '~/components/inputs';

const SignInForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const userNameField = 'username';
  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setFormValues({ username: values.username, password: values.password });
    logger.info('Submit login: ', values, setSubmitting);
  };

  const handleChange = ({ target }) => {
    if (target.name === userNameField) {
      setFormValues({ username: target.value });
    }
    logger.info('Onchange login: ', target);
  };

  return (
    <Formik initialValues={formValues} validateOnMount onSubmit={handleSubmit}>
      {({ isSubmitting, errors, touched }) => (
        <Form onChange={handleChange}>
          <div>
            <img height={50} src={blogImages.avatar} />
            <h2>Sign In</h2>
          </div>

          <EmailField
            errors={errors}
            id="sign-in-email-field"
            label="Email"
            name={userNameField}
            touched={touched}
          />

          <PasswordField
            errors={errors}
            id="sign-in-password-field"
            label="Password"
            name="password"
            touched={touched}
          />

          <CardActions>
            <Button
              color="primary"
              disableElevation
              disabled={isFormButtonDisabled(isSubmitting, errors)}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </CardActions>
        </Form>
      )}
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
