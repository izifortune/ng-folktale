const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ng-folktale.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'), 
      'node_modules'
    ]
  },
  externals: {
    angular: 'angular'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
