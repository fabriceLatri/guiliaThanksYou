import { AuthService } from '@domain/services';

export type SignInAction = {
  authService: AuthService;
  email: string;
  password: string;
};

export type SignUpAction = SignInAction;
