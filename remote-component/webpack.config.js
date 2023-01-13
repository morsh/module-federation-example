const TARGET = process.env.npm_lifecycle_event;
if (['dev', 'start'].includes(TARGET)) {
   module.exports = require('./webpack/webpack.dev.js');
}
if (TARGET === 'build') {
   module.exports = require('./webpack/webpack.prod.js');
}
