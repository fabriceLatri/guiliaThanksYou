module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', {version: 'legacy'}],
      ['@babel/plugin-proposal-class-properties'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@domain': './src/domain',
            '@infrastructure': './src/infrastructure',
            '@components': './src/infrastructure/views/components',
            '@layouts': './src/infrastructure/views/components/layouts',
            '@screens': './src/infrastructure/views/screens',
            '@router': './src/infrastructure/router',
            '@configs': './src/infrastructure/configs',
            '@helpers': './src/infrastructure/helpers',
            '@e2e/helpers': './e2e/helpers',
          },
          extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts', '.native.js'],
        },
      ],
    ],
  };
};
