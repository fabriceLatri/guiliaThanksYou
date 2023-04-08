import * as yup from 'yup';

export const signUpValidatorSchema = yup.object({
  email: yup
    .string()
    .email("L'email est invalide")
    .lowercase()
    .trim()
    .required("L'email est obligatoire"),
  password: yup
    .string()
    .min(4, 'Minimum 4 caractères')
    .required('Le mot de passe est obligatoire'),
  confirmPassword: yup
    .string()
    .required('Le mot de passe est obligatoire')
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas'),
});