import { IPicture } from '@domain/models/entities/Picture';
import { IPictureRepository } from '@domain/repositories';
import { Picture } from '@infrastructure/models/entities/Picture';

const picturesMocked: IPicture[] = [
  new Picture('12345', 'Fabrice L.', 'Test Get Pictures', 'Gigi.png', '', new Date(), new Date()),
  new Picture('54321', 'Fabrice L.', 'Test Get Pictures 2', 'Gigi_2.png', '', new Date(), new Date()),
];

export class PictureRepository implements IPictureRepository {
  public async getPictures(): Promise<IPicture[]> {
    return Promise.resolve(picturesMocked);
  }
}
