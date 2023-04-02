import {AuthError} from '@domain/models/errors/auth/authError';

export type AuthState = {
  loading: boolean;
  id: string;
  email: string;
  isAnonymous: boolean;
  error: AuthError | null;
};
