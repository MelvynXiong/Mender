var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/platforms/web/entry-runtime.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "mender.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
