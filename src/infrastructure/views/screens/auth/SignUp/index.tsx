import {useCallback} from 'react';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Link,
  HStack,
} from 'native-base';

import auth from '@react-native-firebase/auth';

import type {SignUpProps} from '@infrastructure/views/screens/auth/SignUp/types';

export const SignUp = ({navigation}: SignUpProps) => {
  const register = useCallback(async () => {
    try {
      await auth().createUserWithEmailAndPassword(
        'fabrice.latri@gmail.com',
        'L@RIb200506',
      );
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }, []);

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold">
          Bienvenue
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs">
          Enregistrez-vous pour continuer!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input variant="underlined" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input variant="underlined" type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirmer votre mot de passe</FormControl.Label>
            <Input variant="underlined" type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={register}>
            S'enregistrer
          </Button>
          <HStack mt="6" justifyContent="center" space={1}>
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Déjà inscrit.
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              Se connecter
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
