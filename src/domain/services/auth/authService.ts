import {IAuthService} from '@domain/models/interface';
import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {AuthError} from '@domain/models/errors/auth/authError';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export class AuthService implements IAuthService {
  constructor(private repository: IAuthRepository) {}

  signInAsync = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    return await this.repository.signIn(email, password);
  };

  signUpAsync = async (email: string, password: string): Promise<void> => {
    try {
      await this.repository.signUp(email, password);
    } catch (error: unknown) {
      if (error instanceof AuthError) console.error(error.message);
    }
  };
}
