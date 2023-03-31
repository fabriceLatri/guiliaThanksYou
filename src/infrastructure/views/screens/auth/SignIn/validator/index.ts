import * as yup from 'yup';

const myEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
yup.addMethod(yup.string, 'email', function validateEmail(message) {
  return this.matches(myEmailRegex, {
    message,
    name: 'email',
    excludeEmptyString: true,
  });
});

export const signInValidatorSchema = yup.object({
  email: yup
    .string()
    .email("L'e-mail est invalide")
    .lowercase()
    .trim()
    .required("L'email est obligatoire"),
  password: yup.string().min(4, 'Minimum 4 caractères'),
});
