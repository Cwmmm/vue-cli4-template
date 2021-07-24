const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/common/common.less")],
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", //后端接口路径
        changeOrigin: true,
      },
    },
  },
};
