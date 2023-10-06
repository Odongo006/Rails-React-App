const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  resolve: {
    extensions: [".js", ".jsx"],  // Add this line to resolve .jsx files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",  // Add a babel-loader for JavaScript/JSX files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
