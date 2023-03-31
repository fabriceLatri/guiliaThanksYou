// Interfaces

export interface IAuthService {
  signInAsync: (email: string, password: string) => Promise<void>;
  signUpAsync: (email: string, password: string) => Promise<void>;
}

// Types
