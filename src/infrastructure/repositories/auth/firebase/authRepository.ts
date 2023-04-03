import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {IAuthRepository} from '@domain/repositories/auth/authRepository';

export class authFirebaseRepository implements IAuthRepository {
  signIn = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    const userCredentials: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password);

    const {user} = userCredentials;

    return user.toJSON() as FirebaseAuthTypes.User;
  };

  signUp = async (email: string, password: string): Promise<void | never> => {
    await auth().createUserWithEmailAndPassword(email, password);
  };

  signOut = async (): Promise<void | never> => await auth().signOut();
}
