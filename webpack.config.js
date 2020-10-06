/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable no-var */
/* eslint-disable import/newline-after-import */
var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};