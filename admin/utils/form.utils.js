import forEach from 'lodash/forEach';

export const isValidEmail = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

export const isEmptyField = value => {
  return !value || (value && value.length === 0);
};

export const isInvalidPassword = value => !value || (value && value.length < 8);

export const isFormButtonDisabled = (isSubmitting, errors) => {
  const currentErrors = [];

  forEach(errors, value => {
    if (value && value.length > 0) {
      currentErrors.push(value);
    }
  });

  return isSubmitting || currentErrors.length > 0;
};

export const validateInputText = (
  fieldName,
  errors,
  touched,
  helperText = '',
) => {
  return touched[fieldName] && errors[fieldName] && errors[fieldName].length > 0
    ? errors[fieldName]
    : helperText;
};

export const setCaretPosition = (targetElement, position) => {
  const isContentEditable = targetElement && targetElement.contentEditable;

  if (isContentEditable) {
    targetElement.focus();
    document.getSelection().collapse(targetElement, position);
  }
};
