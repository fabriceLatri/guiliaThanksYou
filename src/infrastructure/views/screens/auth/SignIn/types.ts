import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@infrastructure/router/types';
import {signInValidatorSchema} from '@infrastructure/views/screens/auth/SignIn/validator';

export type SignInProps = NativeStackScreenProps<RootStackParamsList, 'SignIn'>;

export type LoginFormData = yup.InferType<typeof signInValidatorSchema>;
