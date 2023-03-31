export interface IAuthRepository {
  signIn: (email: string, password: string) => Promise<void | never>;
  signUp: (email: string, password: string) => Promise<void | never>;
}
