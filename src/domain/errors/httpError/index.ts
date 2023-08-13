import { AbstractError } from '@domain/errors';
import { IHttpError } from '@domain/errors/interfaces';

export class HttpError extends AbstractError implements IHttpError {
  constructor(
    public readonly errorCode: number,
    public readonly errorMessage: string,
  ) {
    super(errorMessage, 'HttpError');
  }
}
