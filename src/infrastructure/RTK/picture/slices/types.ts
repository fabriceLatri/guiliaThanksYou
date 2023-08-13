import { IPicture } from '@domain/models/entities/Picture';

export type PicturesState = {
  pictures: IPicture[];
  loading: boolean;
};
