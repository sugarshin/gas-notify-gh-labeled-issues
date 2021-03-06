const path = require('path')
const webpack = require('webpack')
const GasPlugin = require('gas-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.ts'),
  devtool: false,
  output: {
    filename: 'Code.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SLACK_MENTION_ID',
      'SLACK_WEBHOOK_URL',
      'DEBUG'
    ]),
    new GasPlugin(),
  ],
}
