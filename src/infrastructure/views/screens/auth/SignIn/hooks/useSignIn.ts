import {useCallback} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import type {
  LoginFormData,
  SignInHook,
} from '@infrastructure/views/screens/auth/SignIn/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';
import {signInThunk} from '@infrastructure/RTK/auth/thunks';
import {useAppDispatch} from '@infrastructure/RTK/hooks';
import {AuthError} from '@domain/models/errors/auth/authError';
import {useToast} from '@infrastructure/helpers/hooks/toast';

export const useSignIn = (): SignInHook => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
  });

  const dispatch = useAppDispatch();
  const {displayErrorToast} = useToast();

  const onSubmit = useCallback(
    handleSubmit(async ({email, password}: LoginFormData) => {
      try {
        await dispatch(signInThunk({email, password})).unwrap();
      } catch (error) {
        const authError = error as AuthError;
        displayErrorToast(authError.message);
      }
    }),
    [],
  );

  return {
    control,
    errors,
    onSubmit,
  };
};
