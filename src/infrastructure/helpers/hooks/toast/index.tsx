import {useCallback, useMemo} from 'react';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';
import {UseToastProps} from '@infrastructure/helpers/hooks/toast/types';

export const useToast = (): UseToastProps => {
  const toastConfig = useMemo(
    () => ({
      success: (props: BaseToastProps) => (
        <BaseToast
          {...props}
          text1Style={{marginBottom: 3}}
          text2NumberOfLines={3}
        />
      ),

      error: (props: BaseToastProps) => (
        <ErrorToast
          {...props}
          text1Style={{marginBottom: 3}}
          text2NumberOfLines={3}
        />
      ),

      info: (props: BaseToastProps) => (
        <InfoToast
          {...props}
          text1Style={{marginBottom: 3}}
          text2NumberOfLines={3}
        />
      ),
    }),
    [],
  );

  const displayErrorToast = useCallback((message: string) => {
    Toast.show({
      type: 'error',
      text1: '⛔️ Erreur',
      text2: message,
    });
  }, []);

  return {
    toastConfig,
    displayErrorToast,
  };
};
