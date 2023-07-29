import {IAuthService} from '@domain/models/interface';
import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {CatchAll} from '@domain/decorators/tryCatch';
import {Measure} from '@domain/decorators/measure';

export class AuthService implements IAuthService {
  constructor(private readonly repository: IAuthRepository) {}

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signInAsync(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> {
    return await this.repository.signIn(email, password);
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signUpAsync(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> {
    return await this.repository.signUp(email, password);
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signOutAsync(): Promise<void> {
    await this.repository.signOut();
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(err, ctx))
  async getUserIsAuthenticatedAsync(): Promise<FirebaseAuthTypes.User | null> {
    return await this.repository.getUserIsAuthenticatedAsync();
  }
}
