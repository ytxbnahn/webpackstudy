const path = require('path');

// module.exports = [
//     'source-map'
//   ].map(devtool => ({
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'webpack-numbers.js'
//     },
//     devtool,
//     optimization: {
//       runtimeChunk: true
//     }
//   }));

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      library: 'webpackNumbers',
     libraryTarget: 'umd',
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  };