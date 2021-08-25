const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
  entry: "./src/assets/index.ts",
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: path.resolve(__dirname, "dist/asstes/img"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/img/",
          to: path.resolve(__dirname, "dist/assets/img"),
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)$/i,
          options: {
            quality: 60,
          },
        },
      ],
      overrideExtension: false,
      detailedLogs: true,
    }),
  ],
};

glob
  .sync("**/*.tsx", {
    cwd: "src/pages",
  })
  .forEach((file) => {
    const extname = path.extname(file);
    const basename = path.basename(file, extname);
    const dirname = path.dirname(file);

    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve("src/pages", file),
        filename: path.join(dirname, basename + ".html"),
      })
    );
  });

module.exports = webpackConfig;
