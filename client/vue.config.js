const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: "./",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css|html|svg|jpg|jpeg|png|webp)$/,
        algorithm: "gzip",
        filename: "[path][base].gz",
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
