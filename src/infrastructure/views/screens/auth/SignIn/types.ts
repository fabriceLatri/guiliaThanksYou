import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@infrastructure/router/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';
import {Control, FieldErrors} from 'react-hook-form';
import {Paths} from '@infrastructure/router/enums/paths';

export type SignInProps = NativeStackScreenProps<
  RootStackParamsList,
  Paths.SIGN_IN
>;

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
  loading: boolean;
};

export enum LoginFormFields {
  email = 'email',
  password = 'password',
}
