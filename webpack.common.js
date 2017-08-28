const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
      // Uncomment and add vendor libs
      // vendor: [
      // ],
      app: path.resolve(__dirname, 'src', 'index.ts')
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          loaders: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/,
          include: path.resolve(__dirname, 'src'),
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader?sourceMap=true'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    plugins: [
      new CleanWebpackPlugin([
        'dist'
      ]),
      new HtmlWebpackPlugin({
        title: 'Reactive Snake'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: [
          'common',
          // 'vendor' // uncommnet when adding vendor
        ],
        minChunks: 2
      })
    ]
};
