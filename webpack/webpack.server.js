const path = require('path');
const moduleFederationPlugin = require('./module-federation');

module.exports = {
  name: 'server',
  target: false,
  externals: {
    express: 'express',
  },
  mode: 'production',
  devtool: undefined,
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, '../src/server/index')],
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    ...moduleFederationPlugin.server
  ],
  stats: {
    colors: true,
  },
};
