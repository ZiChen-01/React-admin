const path = require('path')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin()
    ]
  },
  // 配置接口跨域代理
  devServer: {
    // proxy: {
    //   "/api": {
    //     /* 目标代理服务器地址 */
    //     target: process.env.REACT_APP_API_BASE_URL,
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       "^/api": ""   //注册全局路径， 但是在你请求的时候前面需要加上 /api 
    //     }
    //   }
    // }
  }
}
