import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig: webpack.Configuration = merge(commonConfig, {
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
});

export default devConfig;
