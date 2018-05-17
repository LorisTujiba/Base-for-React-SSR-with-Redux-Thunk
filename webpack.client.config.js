const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var browserConfig = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/client.js'
  ],
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'bundle.js',
    // publicPath: '/'
    path: '/',
    publicPath: 'http://localhost:3000/scripts/',
    filename: 'bundle.js',
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
      __isBrowser__: "true"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = [browserConfig]
