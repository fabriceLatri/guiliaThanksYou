import {IUser} from '@domain/models/entities/User';
import {Expose} from 'class-transformer';

export class User implements IUser {
  @Expose({name: 'uid'})
  id: string;
  email: string;
  isAnonymous: boolean;

  constructor(id: string, email: string, isAnonymous: boolean) {
    this.id = id;
    this.email = email;
    this.isAnonymous = isAnonymous;
  }
}
