/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { StrictMode } from 'react';
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
import { ServicesProvider, createServices } from '@infrastructure/services';

function App(): React.JSX.Element {
  const services = createServices();

  const { toastConfig } = useToast();
  const nativeBaseTheme = useNativeBaseTheme();
  const scheme = useColorScheme();

  return (
    <StrictMode>
      <Provider store={store}>
        <ServicesProvider value={services}>
          <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <NativeBaseProvider theme={nativeBaseTheme}>
              <Router />
            </NativeBaseProvider>
          </NavigationContainer>
          <Toast position="bottom" config={toastConfig} />
        </ServicesProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
