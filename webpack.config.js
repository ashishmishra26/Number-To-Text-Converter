const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  module: {
    loaders: [{
        test: /(\.js)$/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        },

        exclude: /(node_modules)/
      },

    ]
  }
};
