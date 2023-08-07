import { useCallback, useMemo } from 'react';
import { useToast } from '@infrastructure/helpers/hooks/toast';

import { useAppDispatch } from '@infrastructure/RTK/hooks';
import { AuthError } from '@domain/models/errors/auth/authError';
import { signOutThunk } from '@infrastructure/RTK/auth/thunks';

// Types
import type { UseHomeHook } from '@infrastructure/views/screens/home/types';
import { Picture } from '@infrastructure/models/entities/Picture';
import { base64Uri } from '@infrastructure/views/screens/home/constants';
import { IPicture } from '@domain/models/entities/Picture';

export const useHome = (): UseHomeHook => {
  const dispatch = useAppDispatch();
  const { displayErrorToast } = useToast();

  const signOut = useCallback(async (): Promise<void> => {
    try {
      await dispatch(signOutThunk()).unwrap();
    } catch (error) {
      displayErrorToast(error instanceof AuthError ? error.message : 'Erreur inconnue');
    }
  }, []);

  const picture = useMemo(
    (): IPicture => new Picture('12345', 'Fabrice L.', 'Test', 'Test Gigi.jpeg', base64Uri, new Date(), new Date()),
    [],
  );

  return {
    signOut,
    picture,
  };
};
