import {IAuthService} from '@domain/models/interface';
import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {CatchAll} from '@infrastructure/decorators/tryCatch';

export class AuthService implements IAuthService {
  constructor(private repository: IAuthRepository) {}

  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signInAsync(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> {
    return await this.repository.signIn(email, password);
  }

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
