import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {SignIn} from '@infrastructure/views/screens/auth/SignIn';
import {SignUp} from '@infrastructure/views/screens/auth/SignUp';
import {Home} from '@infrastructure/views/screens/home';

// Types
import {RootStackParamsList} from '@infrastructure/router/types';
import {useRouter} from '@infrastructure/router/hooks/useRouter';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Router = () => {
  const {isAuthenticated} = useRouter();

  return isAuthenticated ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerLargeTitle: true}}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false, animationTypeForReplace: 'pop'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
