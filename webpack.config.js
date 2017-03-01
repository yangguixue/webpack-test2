

module.exports = {
  entry: {
    entry1: './src/main.js',
    entry2: './src/main2.js',
  },
  output: {
    filename: './[name].js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?mimetype=image/png',
    }]
  }
}
