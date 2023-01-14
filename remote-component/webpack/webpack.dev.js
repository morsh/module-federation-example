const path = require('path');
const { MFLiveReloadPlugin } = require('@module-federation/fmr');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [
    new MFLiveReloadPlugin({
      container: 'remote_component',
      port: 3002,
    }),
  ],
});
