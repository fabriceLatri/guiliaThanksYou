import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useCallback } from 'react';
import { SharedUtils } from '@helpers/utils/SharedUtils';
import { ColorScheme } from '@helpers/utils';

export const useRNNTheme = () => {
  const getRNNTheme = useCallback(
    () => (SharedUtils.getColorScheme() === ColorScheme.DARK ? DarkTheme : DefaultTheme),
    [],
  );

  return { getRNNTheme };
};
