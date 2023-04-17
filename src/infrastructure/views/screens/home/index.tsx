import React from 'react';
import {Button, Center, Text} from 'native-base';
import {useHome} from '@infrastructure/views/screens/home/hooks/useHome';

export const Home = () => {
  const {signOut} = useHome();

  return (
    <Center style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text testID="home-screen-text">Home Screen</Text>
      <Button onPress={signOut}>Log Out</Button>
    </Center>
  );
};
