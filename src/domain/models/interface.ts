// Interfaces

import { IUser } from '@domain/models/entities/User';
import { IPicture } from '@domain/models/entities/Picture';

export interface IAuthService {
  signInAsync: (email: string, password: string) => Promise<IUser>;
  signUpAsync: (email: string, password: string) => Promise<IUser>;
  signOutAsync: () => Promise<void>;
  getUserIsAuthenticatedAsync: () => Promise<IUser | null>;
}

export interface IPictureService {
  getPictures: () => Promise<IPicture[]>;
}
