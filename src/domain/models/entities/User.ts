import {Expose} from 'class-transformer';

export class User {
  @Expose({name: 'uid'})
  id?: string;
  email?: string;
  isAnonymous?: boolean;
}
