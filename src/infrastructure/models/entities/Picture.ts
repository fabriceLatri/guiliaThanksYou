import { Expose } from 'class-transformer';

// Decorators
import { CatchAll } from '@domain/decorators/tryCatch';

// Interfaces
import { IPicture } from '@domain/models/entities/Picture';

// Helpers
import { DateTimeHelper } from '@helpers/utils';

export class Picture implements IPicture {
  id: string;

  author: string;

  description: string;

  @Expose({ name: 'fileName' })
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

  getName(): string {
    return this.filename.substring(0, this.filename.lastIndexOf('.'));
  }

  getFile() {
    return `data:image/png;base64,${this.file}`;
  }

  @CatchAll((error, ctx) => console.error(error.message))
  lastModified(): string {
    return DateTimeHelper.litteralDateToNow(this.updatedAt);
  }
}
