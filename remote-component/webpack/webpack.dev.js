const { MFLiveReloadPlugin } = require('@module-federation/fmr');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  plugins: [
    new MFLiveReloadPlugin({
      container: 'remote_component',
      port: 3002,
    }),
  ],
});
