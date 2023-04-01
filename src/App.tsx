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

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </NavigationContainer>
      <Toast position="bottom" />
    </Provider>
  );
}

export default App;
