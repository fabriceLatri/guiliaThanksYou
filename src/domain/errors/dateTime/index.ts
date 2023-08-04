import { AbstractError } from '@domain/errors';

export class DateTimeError extends AbstractError {
  constructor(public readonly message: string) {
    super(message, DateTimeError.name);
  }

  getMessage(): string {
    return this.message ? this.buildMessage(this.message) : this.buildMessage('Unknown Error!');
  }

  protected buildMessage(msg: string): string {
    return `[${this.tag}]: ${msg}`;
  }
}
