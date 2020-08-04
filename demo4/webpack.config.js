const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: { main: "./src/main.js", print: "./src/print.js" },
  output: {
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Caching",
      template: "./index.html",
    }),
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
