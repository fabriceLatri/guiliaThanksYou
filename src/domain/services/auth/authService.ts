import {IAuthService} from '@domain/models/interface';
import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {AuthError} from '@domain/models/errors/auth/authError';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Logger} from '@infrastructure/decorators/logger';

export class AuthService implements IAuthService {
  constructor(private repository: IAuthRepository) {}

  @Logger()
  signInAsync = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    return await this.repository.signIn(email, password);
  };

  signUpAsync = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    return await this.repository.signUp(email, password);
  };

  signOutAsync = async (): Promise<void> => {
    await this.repository.signOut();
  };
}
