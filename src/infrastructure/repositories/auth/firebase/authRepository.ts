import auth from '@react-native-firebase/auth';

import {IAuthRepository} from '@domain/repositories/auth/authRepository';

export class authFirebaseRepository implements IAuthRepository {
  signIn = async (email: string, password: string): Promise<void> => {
    await auth().signInWithEmailAndPassword(email, password);
  };

  signUp = async (email: string, password: string): Promise<void | never> => {
    await auth().createUserWithEmailAndPassword(email, password);
  };
}
