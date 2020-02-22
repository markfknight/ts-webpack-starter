import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const commonConfig: webpack.Configuration = {
  entry: {
    // Uncomment and add vendor libs
    // vendor: [
    // ],
    app: path.resolve(__dirname, 'src', 'index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [
    // new CleanWebpackPlugin([
    //   'dist'
    // ]),
    new HtmlWebpackPlugin({
      title: 'TS Webpack Starter'
    }),
  ]
}

export default commonConfig;
