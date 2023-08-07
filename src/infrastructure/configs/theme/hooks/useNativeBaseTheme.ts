import { extendTheme } from 'native-base';
import { useColorScheme } from 'react-native';

export const useNativeBaseTheme = () => {
  const scheme = useColorScheme();
  const nativeBaseTheme = extendTheme({
    config: {
      initialColorMode: scheme === 'dark' ? 'dark' : 'light',
    },
    components: {
      Heading: {
        baseStyle: (props: any) => ({
          _light: { color: 'black' },
          _dark: { color: 'white.600' },
        }),
      },
      Center: {
        baseStyle: (props: any) => ({
          _light: { backgroundColor: 'white.600' },
          _dark: { backgroundColor: 'black' },
        }),
      },
    },
  });

  return nativeBaseTheme;
};
