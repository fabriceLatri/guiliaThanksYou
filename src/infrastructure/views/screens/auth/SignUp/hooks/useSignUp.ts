import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Types
import type { SignUpFormData, SignUpHook } from '@infrastructure/views/screens/auth/SignUp/types';
import { useAppDispatch, useAppSelector } from '@infrastructure/RTK/hooks';
import { useToast } from '@infrastructure/helpers/hooks/toast';
import { useCallback } from 'react';
import { AuthError } from '@domain/models/errors/auth/authError';
import { signUpThunk } from '@infrastructure/RTK/auth/thunks';
import { signUpValidatorSchema } from '@infrastructure/views/screens/auth/SignUp/validator';

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

  const { displayErrorToast } = useToast();

  const onSubmit = useCallback(
    handleSubmit(async ({ email, password }: SignUpFormData) => {
      try {
        await dispatch(signUpThunk({ email, password })).unwrap();
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
