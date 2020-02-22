import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const prodConfig: webpack.Configuration = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.s[ac]ss$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[chuckhash].css'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  optimization: {
    minimizer: [new UglifyJSPlugin({
      include: /\/src/
    })]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chuckhash].js',
    path: path.resolve(__dirname, 'dist')
  }
});

export default prodConfig;
