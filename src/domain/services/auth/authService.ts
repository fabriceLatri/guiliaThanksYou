import {IAuthService} from '@domain/models/interface';
import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {AuthError} from '@domain/models/errors/auth/authError';

export class AuthService implements IAuthService {
  constructor(private repository: IAuthRepository) {}

  signInAsync = async (email: string, password: string): Promise<void> => {
    try {
      await this.repository.signIn(email, password);
    } catch (error: unknown) {
      if (error instanceof AuthError) console.error(error.message);
    }
  };

  signUpAsync = async (email: string, password: string): Promise<void> => {
    try {
      await this.repository.signUp(email, password);
    } catch (error: unknown) {
      if (error instanceof AuthError) console.error(error.message);
    }
  };
}
