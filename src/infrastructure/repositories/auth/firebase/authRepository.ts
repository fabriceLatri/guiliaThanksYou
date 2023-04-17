import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {IAuthRepository} from '@domain/repositories/auth/authRepository';
import {Logger} from '@infrastructure/decorators/logger';
import {CatchAll} from '@infrastructure/decorators/tryCatch';

export class authFirebaseRepository implements IAuthRepository {
  // @CatchAll((err, ctx) => console.log(ctx, err))
  // @Logger("Don't use firebase")
  signIn = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    const userCredentials: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password);

    const {user} = userCredentials;

    return user.toJSON() as FirebaseAuthTypes.User;
  };

  signUp = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    const userCredentials: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(email, password);

    const {user} = userCredentials;

    return user.toJSON() as FirebaseAuthTypes.User;
  };

  signOut = async (): Promise<void | never> => await auth().signOut();
}
