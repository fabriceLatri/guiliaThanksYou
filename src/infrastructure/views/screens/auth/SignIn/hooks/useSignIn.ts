import {useCallback} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import type {
  LoginFormData,
  SignInHook,
} from '@infrastructure/views/screens/auth/SignIn/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';
import {useServices} from '@infrastructure/contexts';

export const useSignIn = (): SignInHook => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
  });

  const {authService} = useServices();

  const onSubmit = useCallback(
    handleSubmit(async ({email, password}: LoginFormData) => {
      await authService.signInAsync(email, password);
    }),
    [],
  );

  return {
    control,
    errors,
    onSubmit,
  };
};
