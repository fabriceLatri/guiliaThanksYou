import React from 'react';
import { Box, Heading, Center } from 'native-base';
import { TabHeaderProps } from '@layouts/header/TabHeader/types';

function TabHeader({ name }: TabHeaderProps) {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading
          size="lg"
          fontWeight="800"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          {name}
        </Heading>
      </Box>
    </Center>
  );
}

export default TabHeader;
