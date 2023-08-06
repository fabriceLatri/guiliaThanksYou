import { Appearance } from 'react-native';
import { ColorScheme } from '@infrastructure/helpers/utils/enums';

export class SharedUtils {
  public static getColorScheme(): ColorScheme {
    return Appearance.getColorScheme() === ColorScheme.DARK ? ColorScheme.DARK : ColorScheme.LIGHT;
  }
}
