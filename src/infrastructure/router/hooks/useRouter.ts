import { useEffect, useMemo, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@infrastructure/RTK/hooks';
import { UseRouterInterface } from '@infrastructure/router/interface';
import { getUserIsAuthenticatedThunk } from '@infrastructure/RTK/auth/thunks';
import { useServices } from '@infrastructure/services';

export const useRouter = (): UseRouterInterface => {
  const { authService } = useServices();
  const isFetched = useRef<boolean>(false);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isAuthenticated = useMemo(() => auth?.isAnonymous === false, [auth?.isAnonymous]);

  useEffect(() => {
    if (!isFetched.current) {
      (async () => {
        dispatch(getUserIsAuthenticatedThunk(authService));
      })();

      isFetched.current = true;
    }
  }, []);

  return {
    isAuthenticated,
  };
};
