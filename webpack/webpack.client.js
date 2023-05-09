const path = require('path');
const moduleFederationPlugin = require('./module-federation');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  devtool: undefined,
  entry: {
    clientAppEntrypoint: [
      '@babel/polyfill',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3002/static/',
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
        oneOf: [
          {
            test: /\.css$/,
            include: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false
              },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')],
                },
              },
              { loader: 'resolve-url-loader' },
            ],
          },
        ],
      }
    ],
  },
  plugins: [
    ...moduleFederationPlugin.client,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
