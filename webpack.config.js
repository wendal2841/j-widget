const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    publicPath: 'auto',
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
                  modules: {
                    auto: resPath => resPath.includes('.scss'),
                    localIdentName: '[hash:base64:6]',
                  },
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
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Banner': './src/teleporthq/components/banner',
        './Job': './src/teleporthq/components/job',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
