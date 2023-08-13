import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { IPicture } from '@domain/models/entities/Picture';
import { Picture } from '@infrastructure/models/entities/Picture';
import { IPictureRepository } from '@domain/repositories';

import { Singleton } from '@domain/decorators';
import { JSONWrapper } from '@helpers/utils';

@Singleton
export class PictureRepository implements IPictureRepository {
  async getPictures(): Promise<IPicture[]> {
    const picturesQuerySnapsot = await firestore().collection('pictures').orderBy('updatedAt', 'desc').get();
    const picturesData = picturesQuerySnapsot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        createdAt: ((data as any).createdAt as FirebaseFirestoreTypes.Timestamp).toDate(),
        updatedAt: ((data as any).updatedAt as FirebaseFirestoreTypes.Timestamp).toDate(),
      };
    });
    return JSONWrapper.parse(Picture, picturesData) as IPicture[];
  }
}
