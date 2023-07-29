import {useEffect, useMemo, useRef} from 'react';

import {useAppDispatch, useAppSelector} from '@infrastructure/RTK/hooks';
import {UseRouterInterface} from '@infrastructure/router/interface';
import {getUserIsAuthenticatedThunk} from '@infrastructure/RTK/auth/thunks';

export const useRouter = (): UseRouterInterface => {
  const isFetched = useRef<boolean>(false);
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const isAuthenticated = useMemo(
    () => auth?.isAnonymous === false,
    [auth?.isAnonymous],
  );

  useEffect(() => {
    if (!isFetched.current) {
      (async () => {
        dispatch(getUserIsAuthenticatedThunk());
      })();

      isFetched.current = true;
    }
  });

  return {
    isAuthenticated,
  };
};
