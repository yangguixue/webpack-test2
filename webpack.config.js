var webpack = require('webpack');

module.exports = {
  entry: {
    entry1: './src/main.js',
    entry2: './src/main2.jsx',
  },

  output: {
    filename: './[name].js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?mimetype=image/png',
    }]
  }
}
