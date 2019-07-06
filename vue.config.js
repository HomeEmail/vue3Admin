module.exports = {
  /* 被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源
  都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也
  可以用在类似 Cordova hybrid 应用的文件系统中; 相对路径的
  publicPath 有一些使用上的限制。在以下情况下，应当避免使用
  相对 publicPath:当使用基于 HTML5 history.pushState 的路由时；
  当使用 pages 选项构建多页面应用时; */
  publicPath: '/',
  outputDir: 'dist', // 生成的生产环境构建文件的目录
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html',
  /*
  每次保存时 lint 代码 想要在生产构建时禁用 eslint-loader，
  你可以用如下配置：lintOnSave: process.env.NODE_ENV !== 'production'
  */
  lintOnSave: 'error',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  configureWebpack: (config) => {
    console.log('vue.config.js config.plugins:', config.plugins);
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    // Loader
    console.log('vue.config.js config.loader:', config.loader);
  },
  devServer: {
    // proxy: 'http://localhost:4000'
  },
};
