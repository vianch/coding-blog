import { useState } from 'react';
import { Formik, Form } from 'formik';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

/* Core */
import { blogImages } from '~/core/constants';

/* Utils */
import { isFormButtonDisabled } from '~/utils/form.utils';

/* Components */
import { PasswordField, EmailField } from '~/components/inputs';
import { httpPut } from "~/services/api/rest.api";


const SignInForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const emailField = 'email';

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setFormValues(values);
    await onSubmit(values);
    setSubmitting(false);
  };

  const handleChange = ({ target }) => {
    if (target.name === emailField) {
      setFormValues({ email: target.value });
    }
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
            name={emailField}
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
