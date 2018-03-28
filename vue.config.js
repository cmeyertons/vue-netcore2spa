const path = require("path");
const bundleOutputDir = "./wwwroot/dist";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  lintOnSave: false,
  //https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: {
    //got this from the .net core - VueJS spa template
    output: {
      path: path.join(__dirname, bundleOutputDir),
      filename: "[name].js",
      publicPath: "dist/"
    },
    plugins: [new ExtractTextPlugin("[name].css")]
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        //https://vue-loader.vuejs.org/en/configurations/extract-css.html
        options.loaders["css"] = ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "vue-style-loader"
        });

        return options;
      });
  }
};
