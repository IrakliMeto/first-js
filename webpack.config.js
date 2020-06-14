var path = require('path');

module.exports = {
  mode: 'development',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  }
};