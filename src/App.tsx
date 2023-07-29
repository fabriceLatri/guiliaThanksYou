/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import {Router} from '@infrastructure/router';
import {Provider} from 'react-redux';
import {store} from '@infrastructure/RTK/store';
import {useToast} from '@infrastructure/helpers/hooks/toast';

function App(): React.JSX.Element {
  const {toastConfig} = useToast();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </NavigationContainer>
      <Toast position="bottom" config={toastConfig} />
    </Provider>
  );
}

export default App;
