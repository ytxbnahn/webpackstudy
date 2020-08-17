const path = require('path');
const WebpackCleanupPlugin = require("./WebpackCleanupPlugin.js");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins:[
    new WebpackCleanupPlugin()
  ]
};