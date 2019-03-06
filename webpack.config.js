var path = require('path');
// var webpack = require('webpack');


// var BUILD_DIRECTORY =  path.resolve(__dirname, './build');
// var APP_DIRECTORY = path.resolve(__dirname, './client');

module.exports = {
  mode: 'production',
  entry: '../client/index.js',
    //  entry: './client/index.js',
  output: {
   path: path.resolve(__dirname, 'build'),
    // path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
 
        ]
    }
};

