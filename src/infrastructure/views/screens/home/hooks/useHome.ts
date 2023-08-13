import { useCallback } from 'react';
import { useToast } from '@infrastructure/helpers/hooks/toast';

import { useAppDispatch, useAppSelector } from '@infrastructure/RTK/hooks';
import { AuthError } from '@domain/errors';
import { signOutThunk } from '@infrastructure/RTK/auth/thunks';

// Types
import type { UseHomeHook } from '@infrastructure/views/screens/home/types';
import { useServices } from '@infrastructure/services';
import { getPicturesThunk } from '@infrastructure/RTK/thunks';
import { useEffectOnce } from '@infrastructure/helpers/hooks';
import { AuthState } from '@infrastructure/RTK/auth/slices/types';
import { PicturesState } from '@infrastructure/RTK/picture/slices/types';

export const useHome = (): UseHomeHook => {
  const { authService, pictureService } = useServices();
  const { pictures, loading } = useAppSelector((state: {auth: AuthState; pictures: PicturesState}) => state.pictures);
  const dispatch = useAppDispatch();
  const { displayErrorToast } = useToast();

  const signOut = useCallback(async (): Promise<void> => {
    try {
      await dispatch(signOutThunk(authService)).unwrap();
    } catch (error) {
      displayErrorToast(error instanceof AuthError ? error.message : 'Erreur inconnue');
    }
  }, []);

  useEffectOnce(() => {
    (async () => {
      await dispatch(getPicturesThunk({ pictureService })).unwrap();
    })();
  });

  return {
    signOut,
    pictures,
    loading,
  };
};
