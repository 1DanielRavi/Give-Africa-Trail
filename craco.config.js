const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
        const name = plugin && plugin.constructor && plugin.constructor.name;
        return name !== 'ForkTsCheckerWebpackPlugin' && !(plugin instanceof ForkTsCheckerWebpackPlugin);
      });
      return webpackConfig;
    },
  },
};
