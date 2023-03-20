const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common.js");

// 첫 번째 인자는 "MiniCssExtractPlugin"를 넣어주기 위함...;;
const customizedProductCommon = {
  ...common,
  module: {
    rules: [
      {
        test: /\.css$/i,
        // MiniCssExtractPlugin loader 등록
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(customizedProductCommon, {
  mode: "production",
  // 최적화에 CssMinimizerPlugin 등록
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  // MiniCssExtractPlugin  plugin 등록
  plugins: [new MiniCssExtractPlugin()],
});
