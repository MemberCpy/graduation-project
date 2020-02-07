const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: true,
  chinaWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      
    }
  }
}