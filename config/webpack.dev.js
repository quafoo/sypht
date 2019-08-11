const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: true,
    contentBase: './dist',
    port: 3000,
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/oauth/token': {
        target: 'https://login.sypht.com',
        secure: false,
        changeOrigin: true,
      },
      '/result/final': {
        target: 'https://api.sypht.com',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          configFile: '.eslintrc.js',
        },
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    usedExports: true,
  },
});
