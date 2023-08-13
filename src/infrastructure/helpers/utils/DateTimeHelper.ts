import { AbstractDateTimeHelper } from '@domain/helpers/dateTime';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';

export class DateTimeHelper extends AbstractDateTimeHelper {
  public static litteralDateToNow(dateTime?: Date): string {
    if (!dateTime) return '';
    return formatDistanceToNow(dateTime);
  }

  public static timestampToDate(milliseconds: number): Date {
    return fromUnixTime(milliseconds);
  }
}
