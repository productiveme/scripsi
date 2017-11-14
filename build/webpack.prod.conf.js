var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = require('./webpack.base.conf');

// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URL.
// config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js';

config.devtool = 'source-map';

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'production'
  }),
  new UglifyJSPlugin({
    uglifyOptions: {
      ecma: 6
    }
  })
]);

module.exports = config;
