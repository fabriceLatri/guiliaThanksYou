import { IPicture } from '@domain/models/entities/Picture';

export type UseHomeHook = {
  signOut: () => Promise<void>;
  picture: IPicture;
};
