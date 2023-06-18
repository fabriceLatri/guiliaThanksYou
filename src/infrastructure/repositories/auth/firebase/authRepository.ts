import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {CatchAll} from '@domain/decorators/tryCatch';

export class authFirebaseRepository implements IAuthRepository {
  async signIn(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> {
    const userCredentials: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password);

    const {user} = userCredentials;

    const idTokenResult: FirebaseAuthTypes.IdTokenResult | undefined =
      await auth().currentUser?.getIdTokenResult();

    if (idTokenResult) {
      const {claims} = idTokenResult;
      console.log(claims);
    }

    return user.toJSON() as FirebaseAuthTypes.User;
  }

  async signUp(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> {
    const userCredentials: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(email, password);

    const {user} = userCredentials;

    return user.toJSON() as FirebaseAuthTypes.User;
  }

  async signOut(): Promise<void | never> {
    return await auth().signOut();
  }
}
