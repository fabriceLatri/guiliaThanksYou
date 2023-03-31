import {useCallback} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import type {
  LoginFormData,
  SignInHook,
} from '@infrastructure/views/screens/auth/SignIn/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';

export const useSignIn = (): SignInHook => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    handleSubmit(({email, password}: LoginFormData) => {
      console.log(email, password);
    }),
    [],
  );

  return {
    control,
    errors,
    onSubmit,
  };
};
