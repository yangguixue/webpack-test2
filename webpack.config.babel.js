import path from 'path';
import webpack from 'webpack';
import HtmlwebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main.jsx',
  ],

  output: {
    filename: './bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlwebpackPlugin({
      template: './src/index.html',
      hash: false,
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
    }),
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react,presets[]=stage-0',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?mimetype=image/png',
    }],
  },
};
