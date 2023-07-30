import { User } from '@domain/models/entities/User';

export interface IAuthRepository {
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  getUserIsAuthenticatedAsync: () => Promise<User | null>;
}
