import {useCallback} from 'react';
import {useToast} from '@infrastructure/helpers/hooks/toast';

import {useAppDispatch} from '@infrastructure/RTK/hooks';
import {AuthError} from '@domain/models/errors/auth/authError';
import {signOutThunk} from '@infrastructure/RTK/auth/thunks';

// Types
import type {UseHomeHook} from '@infrastructure/views/screens/home/types';

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
