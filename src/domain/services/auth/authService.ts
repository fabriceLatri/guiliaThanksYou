import { IAuthService } from '@domain/models/interface';
import { IAuthRepository } from '@domain/repositories/auth/authRepository';
import { CatchAll } from '@domain/decorators/tryCatch';
import { Measure } from '@domain/decorators/measure';
import { IUser } from '@domain/models/entities/User';

export class AuthService implements IAuthService {
  constructor(private readonly repository: IAuthRepository) {}

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signInAsync(email: string, password: string): Promise<IUser> {
    return await this.repository.signIn(email, password);
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signUpAsync(email: string, password: string): Promise<IUser> {
    return await this.repository.signUp(email, password);
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(ctx, err))
  async signOutAsync(): Promise<void> {
    await this.repository.signOut();
  }

  @Measure()
  @CatchAll((err: Error, ctx: any) => console.log(err, ctx))
  async getUserIsAuthenticatedAsync(): Promise<IUser | null> {
    return await this.repository.getUserIsAuthenticatedAsync();
  }
}
