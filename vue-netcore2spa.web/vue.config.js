const path = require("path");
const bundleOutputDir = "./wwwroot/dist";
const templateFolder = "./Views/Shared/";

//note: you can use vue inspect > test.js to generate what the webpack.config will kinda look like, good for testing changes here
module.exports = {
  lintOnSave: false,
  //https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: {
    //got this from the .net core - VueJS spa template
    output: {
      path: path.join(__dirname, bundleOutputDir),
      filename: "[name].js",
      publicPath: "dist/"
    }
  },

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      var options = args[0];
      options.template = path.join(
        __dirname,
        templateFolder,
        "_LayoutTemplate.cshtml"
      );

      options.filename = path.join("../../", templateFolder, "_Layout.cshtml");
      return args;
    });

    //https://github.com/mozilla-neutrino/webpack-chain#config-plugins-removing
    //this was causing an issue w/ being added twice, once by .net core, once by vue-cli
    config.plugins.delete("hmr");
  }
};
