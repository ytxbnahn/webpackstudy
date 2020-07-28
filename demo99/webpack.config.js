module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.js", 
  output: {
    path: __dirname + "/public", 
    filename: "bundle.js", 
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./public", 
    colors: true, 
    historyApiFallback: true, 
    inline: true,
  },
};
