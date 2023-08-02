import React from 'react';
import {
  Button, Center, Image, Text,
} from 'native-base';
import { useHome } from '@infrastructure/views/screens/home/hooks/useHome';
import { base64Uri } from '@infrastructure/views/screens/home/constants';

export function Home() {
  const { signOut } = useHome();

  return (
    <Center style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        resizeMode="contain"
        source={{
          uri: base64Uri,
        }}
        style={{ flex: 1 }}
        alt="Gigi in cosy"
        size="2xl"
      />
      <Text testID="home-screen-text">Home Screen</Text>
      <Button onPress={signOut}>Log Out</Button>
    </Center>
  );
}
