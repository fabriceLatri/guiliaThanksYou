import React from 'react';
import { Home } from '@infrastructure/views/screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Paths } from '@router/enums/paths';
import { RootBottomTabParamsList } from '@router/types';

const Tab = createBottomTabNavigator<RootBottomTabParamsList>();

export function HomeRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Paths.HOME} component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
