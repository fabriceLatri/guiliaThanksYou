import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@infrastructure/views/screens/auth/SignIn';
import {SignUp} from '@infrastructure/views/screens/auth/SignUp';
import {RootStackParamsList} from '@infrastructure/router/types';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
