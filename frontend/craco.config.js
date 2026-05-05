const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  babel: {
    plugins: process.env.NODE_ENV === 'production' ? [] : [],
    loaderOptions: (babelLoaderOptions) => {
      if (process.env.NODE_ENV === 'production') {
        babelLoaderOptions.plugins = babelLoaderOptions.plugins.filter(
          (plugin) => !plugin.toString().includes('react-refresh')
        );
      }
      return babelLoaderOptions;
    },
  },
};

