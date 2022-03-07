const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()], // this is required
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    // We do not want to minimize our code.
    minimize: false,
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: ["./prisma/schema.prisma"] }) // without this the prisma generate above will not work
   ]
};