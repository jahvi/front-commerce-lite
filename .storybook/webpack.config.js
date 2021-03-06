const path = require("path");
const srcPath = path.resolve(__dirname, "../src");
const sass = {
  globalsImportStatements: '@import "globals.scss";',
  globalsImportPaths: [path.resolve(__dirname, "../src/web/theme")]
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcPath],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.scss$/,
        include: [srcPath],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              data: sass.globalsImportStatements,
              includePaths: sass.globalsImportPaths
            }
          }
        ]
      }
    ]
  }
};
