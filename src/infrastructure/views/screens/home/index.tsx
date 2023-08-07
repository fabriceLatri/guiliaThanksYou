import React, { Suspense } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import {
  Button, Center, ScrollView, Text, VStack,
} from 'native-base';
import { useHome } from '@infrastructure/views/screens/home/hooks/useHome';
import { PictureCard } from '@infrastructure/views/components/common/PictureCard';
import { Loader } from '@infrastructure/views/components/layouts/ActivityIndicators';

export function Home() {
  const { signOut, picture } = useHome();

  const headerHeight = useHeaderHeight();

  return (
    <Suspense fallback={<Loader />}>
      <ScrollView>
        <VStack space={10} safeArea alignItems="center" mt={headerHeight + 30}>
          <Center style={{ justifyContent: 'center', alignItems: 'center' }}>
            <PictureCard picture={picture} />
          </Center>
          <Text testID="home-screen-text">Home Screen</Text>
          <Button onPress={signOut}>Log Out</Button>
        </VStack>
      </ScrollView>
    </Suspense>
  );
}
