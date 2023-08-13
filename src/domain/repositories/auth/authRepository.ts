import { IUser } from '@domain/models/entities/User';

export interface IAuthRepository {
  signIn: (email: string, password: string) => Promise<IUser>;
  signUp: (email: string, password: string) => Promise<IUser>;
  signOut: () => Promise<void>;
  getUserIsAuthenticatedAsync: () => Promise<IUser | null>;
}
