import { IPicture } from '@domain/models/entities/Picture';

export interface IPictureRepository {
  getPictures: () => Promise<IPicture[]>;
}
