var webpack = require('webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "babel-preset-env",
                {
                  "targets": {
                    "browsers": ["last 2 versions", "ie >= 11"]
                  },
                }
              ],
              "react"
            ]
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: "source-map",
  entry: {
    index: "./UITesting/index",
  },
  output: {
    path: __dirname,
    filename: "react.js",
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: __dirname,
    port: 8080,
  }
};