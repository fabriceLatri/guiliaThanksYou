import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { SignIn } from '@infrastructure/views/screens/auth/SignIn';
import { SignUp } from '@infrastructure/views/screens/auth/SignUp';
import { Home } from '@infrastructure/views/screens/home';

// Types
import { RootBottomTabParamsList, RootStackParamsList } from '@infrastructure/router/types';
import { useRouter } from '@infrastructure/router/hooks/useRouter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Paths } from '@infrastructure/router/enums/paths';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Tab = createBottomTabNavigator<RootBottomTabParamsList>();

export function Router() {
  const { isAuthenticated } = useRouter();

  return isAuthenticated ? (
    <Tab.Navigator>
      <Tab.Screen name={Paths.HOME} component={Home} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name={Paths.SIGN_IN}
        component={SignIn}
        options={{ headerShown: false, animationTypeForReplace: 'pop' }}
      />
      <Stack.Screen name={Paths.SIGN_UP} component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
