import React from 'react';
import {
  Button, Center, ScrollView, Text, VStack,
} from 'native-base';
import { useHome } from '@infrastructure/views/screens/home/hooks/useHome';
import { PictureCard } from '@infrastructure/views/components/common/PictureCard';
import { Loader } from '@infrastructure/views/components/layouts/ActivityIndicators';
import { IPicture } from '@domain/models/entities/Picture';
import { Platform } from 'react-native';

export function Home() {
  const { signOut, pictures, loading } = useHome();

  if (loading) return <Loader />;

  return (
    <ScrollView
      style={{ backgroundColor: 'green' }}
      contentInsetAdjustmentBehavior="automatic"
      pt={Platform.OS === 'android' ? 5 : 0}
    >
      <VStack space={10} safeArea alignItems="center" style={{ backgroundColor: 'red' }}>
        {pictures.map((picture: IPicture) => (
          <Center key={picture.id} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <PictureCard picture={picture} />
          </Center>
        ))}
        <Text testID="home-screen-text">Home Screen</Text>
        <Button onPress={signOut}>Log Out</Button>
      </VStack>
    </ScrollView>
  );
}
