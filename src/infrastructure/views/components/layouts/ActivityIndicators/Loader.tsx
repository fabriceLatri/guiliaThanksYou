import React from 'react';
import { HStack, Heading, Spinner } from 'native-base';

export function Loader() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner color="indigo.500" accessibilityLabel="Loading posts" />
      <Heading color="indigo.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}
