import React from 'react';
import {
  Center, HStack, Heading, Spinner,
} from 'native-base';

export function Loader() {
  return (
    <Center style={{ flex: 1 }} alignItems="center" justifyContent="center">
      <HStack space={2} justifyContent="center">
        <Spinner color="indigo.500" accessibilityLabel="Loading posts" />
        <Heading color="indigo.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
}
