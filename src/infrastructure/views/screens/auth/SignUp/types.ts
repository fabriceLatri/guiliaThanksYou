import * as yup from 'yup';
import { Control, FieldErrors } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamsList } from '@infrastructure/router/types';
import { signUpValidatorSchema } from '@infrastructure/views/screens/auth/SignUp/validator';
import { Paths } from '@infrastructure/router/enums/paths';

export type SignUpProps = NativeStackScreenProps<RootStackParamsList, Paths.SIGN_UP>;

export type SignUpFormData = yup.InferType<typeof signUpValidatorSchema>;

export type SignUpHook = {
  control: Control<
    {
      email: string;
      password: string;
      confirmPassword: string;
    },
    any
  >;
  onSubmit: () // e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  => Promise<void>;
  errors: FieldErrors<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  loading: boolean;
};

export enum SignUpFormFields {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
}
