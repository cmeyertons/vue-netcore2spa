const path = require('path');
const bundleOutputDir = './wwwroot/dist';

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    output: {
      path: path.join(__dirname, bundleOutputDir),
      filename: "[name].js",
      publicPath: "dist/"
    }
  }
};
