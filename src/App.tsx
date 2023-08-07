/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
// Router
import { Router } from '@infrastructure/router';

// State Management
import { store } from '@infrastructure/RTK/store';

// Notifications
import { useToast } from '@helpers/hooks/toast';

// Themes
import { useNativeBaseTheme } from '@configs/theme';

function App(): React.JSX.Element {
  const { toastConfig } = useToast();
  const nativeBaseTheme = useNativeBaseTheme();
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <Router />
        </NativeBaseProvider>
      </NavigationContainer>
      <Toast position="bottom" config={toastConfig} />
    </Provider>
  );
}

export default App;
