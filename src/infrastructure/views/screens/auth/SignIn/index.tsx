import React from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from 'native-base';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import type {
  SignInProps,
  LoginFormData,
} from '@infrastructure/views/screens/auth/SignIn/types';
import FormInputController from '@infrastructure/views/shared/UI/formInputController';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';

enum FormFields {
  email = 'email',
  password = 'password',
}

export const SignIn = ({navigation}: SignInProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInValidatorSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

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
          <FormInputController
            control={control}
            error={errors.email}
            label="Email"
            name={FormFields.email}
            variant="underlined"
          />
          {/* <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input variant="underlined" type="text" />
          </FormControl> */}
          <FormInputController
            control={control}
            error={errors.password}
            label="Mot de passe"
            name={FormFields.password}
            variant="underlined"
            type="password">
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
          </FormInputController>
          {/* <FormControl>
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
          </FormControl> */}
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit(onSubmit)}>
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
