/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Router} from '@infrastructure/router';
import {ServicesProvider, createRootService} from '@infrastructure/contexts';

const services = createRootService();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ServicesProvider value={services}>
          <Router />
        </ServicesProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
