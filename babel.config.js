module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@src': './src',
            '@contexts': './src/contexts',
            '@helpers': './src/global/helpers',
            '@styles': './src/global/styles',
            '@types': './src/types',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@templates': './src/components/templates',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@services': './src/services',
            '@storage': './src/storage',
            '@assets': './src/assets',
            '@states': './src/states',
            '@pages': './src/pages',
          },
        },
      ],
    ],
  };
};
