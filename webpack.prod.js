const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6,
        include: path.resolve(__dirname, 'src'),
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chuckhash].js',
    path: path.resolve(__dirname, 'dist')
  }
});
