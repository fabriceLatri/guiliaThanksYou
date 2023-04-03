import {useCallback} from 'react';
import {useAppDispatch} from '@infrastructure/RTK/hooks';
import {useToast} from '@infrastructure/helpers/hooks/toast';

// Types
import type {UseHomeHook} from '@infrastructure/views/screens/home/types';
import {AuthError} from '@domain/models/errors/auth/authError';
import {signOutThunk} from '@infrastructure/RTK/auth/thunks';

export const useHome = (): UseHomeHook => {
  const dispatch = useAppDispatch();
  const {displayErrorToast} = useToast();

  const signOut = useCallback(async () => {
    try {
      await dispatch(signOutThunk()).unwrap();
    } catch (error) {
      displayErrorToast(
        error instanceof AuthError ? error.message : 'Erreur inconnue',
      );
    }
  }, []);

  return {
    signOut,
  };
};
