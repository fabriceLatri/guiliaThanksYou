import React from 'react';
import {
  AspectRatio, Box, HStack, Heading, Image, Stack, Text,
} from 'native-base';
import { IPicture } from '@domain/models/entities/Picture';

type PictureCardProps = {
  picture: IPicture;
};

export function PictureCard({ picture }: PictureCardProps) {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%">
            <Image
              resizeMode="contain"
              source={{
                uri: picture.getFile(),
              }}
              alt={`image-${picture.getName()}`}
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {picture.getName()}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'indigo.500',
              }}
              _dark={{
                color: 'indigo.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {picture.author}
            </Text>
          </Stack>
          <Text fontWeight="400">{picture.description}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400"
              >
                {picture.lastModified()}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
