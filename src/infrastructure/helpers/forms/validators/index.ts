import * as yup from 'yup';

const myEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
yup.addMethod(yup.string, 'email', function validateEmail(message) {
  return this.matches(myEmailRegex, {
    message,
    name: 'email',
    excludeEmptyString: true,
  });
});
