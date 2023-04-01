import {useCallback} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import type {
  LoginFormData,
  SignInHook,
} from '@infrastructure/views/screens/auth/SignIn/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';
import {signInThunk} from '@infrastructure/RTK/auth/thunks';
// import {SignInAction} from '@infrastructure/RTK/auth/thunks/types';
import {useAppDispatch} from '@infrastructure/RTK/store';

export const useSignIn = (): SignInHook => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    handleSubmit(async ({email, password}: LoginFormData) => {
      await dispatch(signInThunk({email, password}));
    }),
    [],
  );

  return {
    control,
    errors,
    onSubmit,
  };
};
