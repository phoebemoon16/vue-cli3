// webpack 配置文件
module.exports = {
    devServer: {
      proxy: {
        "/": {
          target: "http://192.168.10.76:8090",
          ws: false,
          changeOrigin: true,
          disableHostCheck: true
        }
      }
    },
    productionSourceMap: false
  };
