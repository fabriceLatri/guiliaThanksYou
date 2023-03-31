import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@infrastructure/router/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';
import {Control, FieldErrors} from 'react-hook-form';

export type SignInProps = NativeStackScreenProps<RootStackParamsList, 'SignIn'>;

export type LoginFormData = yup.InferType<typeof signInValidatorSchema>;

export type SignInHook = {
  control: Control<
    {
      email: string;
      password: string;
    },
    any
  >;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
};

export enum LoginFormFields {
  email = 'email',
  password = 'password',
}
