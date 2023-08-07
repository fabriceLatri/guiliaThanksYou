import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { SignIn } from '@screens/auth/SignIn';
import { SignUp } from '@screens/auth/SignUp';

// Custom Hooks
import { useRouter } from '@router/hooks/useRouter';

// Types
import { LoginStackParamsList, MainStackParamsList } from '@router/types';
import { Paths } from '@router/enums/paths';
import { HomeRoutes } from '@router/HomeRoutes';

const LoginStack = createNativeStackNavigator<LoginStackParamsList>();

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export function Router() {
  const { isAuthenticated } = useRouter();

  return isAuthenticated ? (
    <MainStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: false,
      }}
    >
      <MainStack.Screen name={Paths.HOME_ROUTES} component={HomeRoutes} />
    </MainStack.Navigator>
  ) : (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name={Paths.SIGN_IN}
        component={SignIn}
        options={{ headerShown: false, animationTypeForReplace: 'pop' }}
      />
      <LoginStack.Screen name={Paths.SIGN_UP} component={SignUp} options={{ headerShown: false }} />
    </LoginStack.Navigator>
  );
}
