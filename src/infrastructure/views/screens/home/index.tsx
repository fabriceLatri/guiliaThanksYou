import React, {useCallback} from 'react';
import {Button, Center, Text} from 'native-base';
import auth from '@react-native-firebase/auth';

export const Home = () => {
  const signOut = useCallback(async () => {
    await auth().signOut();
  }, []);

  return (
    <Center style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={signOut}>Log Out</Button>
    </Center>
  );
};
