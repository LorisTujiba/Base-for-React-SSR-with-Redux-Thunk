const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var serverConfig = {
  entry: './src/server.js',
  target: 'node',
  externals: nodeExternals(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [serverConfig]
