const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode:'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/global.js"),
        use: "exports-loader?file,parse=helpers.parse",
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve("babel-loader"),
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: "lodash",
      join: ["lodash", "join"],
    }),
  ],
};
