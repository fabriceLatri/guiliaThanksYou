import React from 'react';
import {
  Center,
  Box,
  Heading,
  VStack,
  Button,
  Text,
  Link,
  HStack,
} from 'native-base';

import {
  SignUpFormFields,
  type SignUpProps,
} from '@infrastructure/views/screens/auth/SignUp/types';
import {useSignUp} from '@infrastructure/views/screens/auth/SignUp/hooks/useSignUp';
import {FormInputController} from '@infrastructure/views/components/forms/formInputController';
import {Paths} from '@infrastructure/router/enums/paths';

export const SignUp = ({navigation}: SignUpProps) => {
  const {control, onSubmit, errors, loading} = useSignUp();

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" py="8">
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
          <FormInputController
            control={control}
            error={errors.email}
            label="Email"
            name={SignUpFormFields.email}
            variant="underlined"
            required
          />
          <FormInputController
            control={control}
            error={errors.password}
            label="Mot de passe"
            name={SignUpFormFields.password}
            type="password"
            variant="underlined"
            required
          />
          <FormInputController
            control={control}
            error={errors.confirmPassword}
            label="Confirmation du mot de passe"
            name={SignUpFormFields.confirmPassword}
            type="password"
            variant="underlined"
            required
          />
          <Button
            isLoading={loading}
            isLoadingText="Chargement..."
            mt="2"
            colorScheme="indigo"
            onPress={onSubmit}>
            S'enregistrer
          </Button>
          <HStack mt="6" justifyContent="center" space={1}>
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Déjà inscrit ?
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => {
                navigation.navigate(Paths.SIGN_IN);
              }}>
              Se connecter
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
