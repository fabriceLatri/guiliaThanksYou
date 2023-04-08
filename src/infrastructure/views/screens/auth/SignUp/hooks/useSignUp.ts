import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

// Types
import type {
  SignUpFormData,
  SignUpHook,
} from '@infrastructure/views/screens/auth/SignUp/types';
import {signUpValidatorSchema} from '../validator';
import {useAppDispatch} from '@infrastructure/RTK/hooks';
import {useToast} from '@infrastructure/helpers/hooks/toast';
import {useCallback} from 'react';
import {AuthError} from '@domain/models/errors/auth/authError';
import {signUpThunk} from '@infrastructure/RTK/auth/thunks';

export const useSignUp = (): SignUpHook => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpValidatorSchema),
  });

  const dispatch = useAppDispatch();
  const {displayErrorToast} = useToast();

  const onSubmit = useCallback(
    handleSubmit(async ({email, password}: SignUpFormData) => {
      try {
        await dispatch(signUpThunk({email, password})).unwrap();
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
  };
};
