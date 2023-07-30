import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { IAuthRepository } from '@domain/repositories/auth/authRepository';
import { JSONWrapper } from '@infrastructure/helpers/utils/JSONWrapper';
import { User } from '@infrastructure/entities/User';
import { IUser } from '@domain/models/entities/User';

export class authFirebaseRepository implements IAuthRepository {
  async signIn(email: string, password: string): Promise<User> {
    const userCredentials: FirebaseAuthTypes.UserCredential = await auth().signInWithEmailAndPassword(email, password);

    const { user } = userCredentials;

    const idTokenResult: FirebaseAuthTypes.IdTokenResult | undefined = await auth().currentUser?.getIdTokenResult();

    if (idTokenResult) {
      const { claims } = idTokenResult;
      console.log(claims);
    }

    return JSONWrapper.parse(User, user.toJSON()) as IUser;
  }

  async signUp(email: string, password: string): Promise<User> {
    const userCredentials: FirebaseAuthTypes.UserCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    const { user } = userCredentials;

    return JSONWrapper.parse(User, user.toJSON()) as User;
  }

  async signOut(): Promise<void> {
    return await auth().signOut();
  }

  async getUserIsAuthenticatedAsync(): Promise<User | null> {
    const result: FirebaseAuthTypes.User | null = await new Promise((resolve) => {
      auth().onAuthStateChanged((user) => resolve(user));
    });

    if (!result) return null;
    return JSONWrapper.parse(User, result.toJSON()) as User;
  }
}
