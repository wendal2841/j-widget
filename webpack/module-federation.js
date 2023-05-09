const deps = require('../package.json').dependencies;
const moduleFederationConfig = require('../moduleFederation.json');
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const FederationStatsPlugin = require('webpack-federation-stats-plugin');

module.exports = {
  client: [
    new FederationStatsPlugin(),
    new ModuleFederationPlugin({
      ...moduleFederationConfig,
      remotes: {},
      shared: [{
        react: deps.react,
        'react-dom': deps['react-dom']
      }],
    }),
  ],
  server: [
    new NodeFederationPlugin({
      ...moduleFederationConfig,
      library: { type: 'commonjs-module' },
      remotes: {},
      shared: [
        {
          react: { requiredVersion: deps.react, eager: true },
          'react-dom': deps['react-dom']
        },
      ],
    }),
    new StreamingTargetPlugin({
      name: moduleFederationConfig.name,
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
  ],
};
