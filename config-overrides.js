const { override, fixBabelImports,addWebpackAlias, addDecoratorsLegacy} = require('customize-cra');
const path = require("path")

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
   addWebpackAlias({
    '@': path.join(__dirname, "src")
  }), //优化路径
  addDecoratorsLegacy()//使用装饰器
 );