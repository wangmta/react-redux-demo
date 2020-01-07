// node's CommonJS syntax (for node version that doesn't support ES modules)
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web',
  devTool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  }
};

// webpack doesn't create output dir under dev mode, but it serves the app from memory, setting output path value let webpack know where to serve form the memory

// __dirname gives us currenty directory name
