const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?this=>window",
      },
      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?file,parse=helpers.parse",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: "lodash",
      join: ["lodash", "join"],
    }),
  ],
};
