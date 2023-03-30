import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';
import type {SignInProps} from '@infrastructure/views/screens/auth/SignIn/types';

export const SignIn = ({navigation}: SignInProps) => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Bienvenue
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Connectez-vous pour continuer!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input variant="underlined" type="text" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input type="password" variant="underlined" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Mot de passe oublié?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Connexion
          </Button>
          <HStack mt="6" justifyContent="center" space={1}>
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Je suis un nouvel utilisateur.
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              S'enregistrer
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
