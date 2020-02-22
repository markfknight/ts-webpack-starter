import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';
import MiniCssExtractPlugin  from "mini-css-extract-plugin";
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const prodConfig: webpack.Configuration = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[chunkhash].css',
      filename: '[name].[chunkhash].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        include: /\/src/
      })
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chuckhash].js',
    path: path.resolve(__dirname, 'dist')
  }
});

export default prodConfig;
