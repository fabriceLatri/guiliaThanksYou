import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Types
import type { SignUpFormData, SignUpHook } from '@infrastructure/views/screens/auth/SignUp/types';
import { useAppDispatch, useAppSelector } from '@infrastructure/RTK/hooks';
import { useToast } from '@infrastructure/helpers/hooks/toast';
import { useCallback } from 'react';
import { AuthError } from '@domain/errors';
import { signUpThunk } from '@infrastructure/RTK/auth/thunks';
import { signUpValidatorSchema } from '@infrastructure/views/screens/auth/SignUp/validator';
import { useServices } from '@infrastructure/services';

export const useSignUp = (): SignUpHook => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpValidatorSchema),
  });

  // RTK
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const { authService } = useServices();

  const { displayErrorToast } = useToast();

  const onSubmit = useCallback(
    handleSubmit(async ({ email, password }: SignUpFormData) => {
      try {
        await dispatch(signUpThunk({ authService, email, password })).unwrap();
      } catch (error) {
        const authError = error as AuthError;
        displayErrorToast(authError.message);
      }
    }),
    [],
  );

  return {
    control,
    onSubmit,
    errors,
    loading,
  };
};
