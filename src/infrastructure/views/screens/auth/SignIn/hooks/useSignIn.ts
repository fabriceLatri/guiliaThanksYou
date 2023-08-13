import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import type { LoginFormData, SignInHook } from '@infrastructure/views/screens/auth/SignIn/types';
import { signInValidatorSchema } from '@infrastructure/views/screens/auth/SignIn/validator';
import { signInThunk } from '@infrastructure/RTK/auth/thunks';
import { useAppDispatch, useAppSelector } from '@infrastructure/RTK/hooks';
import { AuthError } from '@domain/errors';
import { useToast } from '@infrastructure/helpers/hooks/toast';
import { useServices } from '@infrastructure/services';

export const useSignIn = (): SignInHook => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
  });

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const { displayErrorToast } = useToast();

  const { authService } = useServices();

  const onSubmit = useCallback(
    handleSubmit(async ({ email, password }: LoginFormData) => {
      try {
        await dispatch(signInThunk({ authService, email, password })).unwrap();
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
    loading,
  };
};
