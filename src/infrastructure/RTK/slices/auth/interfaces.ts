import {AuthError} from '@domain/models/errors/auth/interfaces';

export interface AuthState {
  authLoading: boolean;
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string[];
  error?: AuthError;
}
