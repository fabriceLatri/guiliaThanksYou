import {useCallback} from 'react';
import Toast from 'react-native-toast-message';
import {UseToastProps} from '@infrastructure/helpers/hooks/toast/types';

export const useToast = (): UseToastProps => {
  const displayErrorToast = useCallback((message: string) => {
    Toast.show({
      type: 'error',
      text1: '⛔️ Erreur',
      text2: message,
    });
  }, []);

  return {
    displayErrorToast,
  };
};
