const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true,
  },
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 9081,
  },
  plugins: [
    new DotenvWebpackPlugin({ path: ".env.local" }),
    new HtmlWebpackPlugin({
      title: "Vesting",
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, "node_modules/jquery/src/jquery"),
    },
  },
};
