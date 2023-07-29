// Interfaces

import {User} from '@domain/models/entities/User';

export interface IAuthService {
  signInAsync: (email: string, password: string) => Promise<User>;
  signUpAsync: (email: string, password: string) => Promise<User>;
  signOutAsync: () => Promise<void>;
  getUserIsAuthenticatedAsync: () => Promise<User | null>;
}

// Types
