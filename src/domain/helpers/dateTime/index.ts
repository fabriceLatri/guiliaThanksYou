import { NotImplementedError } from '@domain/decorators/notImplementedError';
import { DateTimeError } from '@domain/errors';

export abstract class AbstractDateTimeHelper {
  @NotImplementedError(DateTimeError)
  public static litteralDateToNow(dateTime: Date) {}
}
