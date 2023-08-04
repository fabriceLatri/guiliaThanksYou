import { CatchAll } from '@domain/decorators/tryCatch';
import { IPicture } from '@domain/models/entities/Picture';
import { DateTimeHelper } from '@infrastructure/helpers/utils/DateTimeHelper';
import { Expose } from 'class-transformer';

export class Picture implements IPicture {
  @Expose({ name: 'uid' })
    id: string;

  author: string;

  description: string;

  filename: string;

  file: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(
    id: string,
    author: string,
    description: string,
    filename: string,
    file: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.author = author;
    this.description = description;
    this.filename = filename;
    this.file = file;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getFile() {
    return `data:image/png;base64:${this.file}`;
  }

  @CatchAll((error, ctx) => console.error(error.message))
  lastModified(): string {
    return DateTimeHelper.litteralDateToNow(this.updatedAt);
  }
}
