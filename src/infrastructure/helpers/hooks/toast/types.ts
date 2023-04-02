import {BaseToastProps} from 'react-native-toast-message';

export type UseToastProps = {
  displayErrorToast: (message: string) => void;
  toastConfig: {
    success: (props: BaseToastProps) => JSX.Element;
    error: (props: BaseToastProps) => JSX.Element;
    info: (props: BaseToastProps) => JSX.Element;
  };
};
