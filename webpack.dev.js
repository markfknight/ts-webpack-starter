const path = require('path');
const webpack = require('webpack');
// const { CheckerPlugin } = require('awesome-typescript-loader'); // enable for async
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common , {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap=true'
        ]
      }
    ],
  },
  plugins: [
    // new CheckerPlugin(), // enable for TS async debug
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunkbundle.js',
    path: path.resolve(__dirname, 'dist')
  }
})
