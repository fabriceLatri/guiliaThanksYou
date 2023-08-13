import { AuthError } from '@domain/errors';

export type AuthState = {
  loading: boolean;
  id: string;
  email: string;
  isAnonymous: boolean;
  error: AuthError | null;
};
