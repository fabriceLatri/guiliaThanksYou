import {useAppSelector} from '@infrastructure/RTK/hooks';
import {useMemo} from 'react';
import {UseRouterInterface} from '@infrastructure/router/interface';

export const useRouter = (): UseRouterInterface => {
  const auth = useAppSelector(state => state.auth);

  const isAuthenticated = useMemo(
    () => auth?.isAnonymous === false ?? false,
    [auth?.isAnonymous],
  );

  return {
    isAuthenticated,
  };
};
