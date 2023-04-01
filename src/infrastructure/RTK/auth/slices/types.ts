export type AuthInfo = {
  loading: boolean;
  id: string;
  email: string;
  isAnonymous: boolean;
};

export type AuthState = AuthInfo | null;
