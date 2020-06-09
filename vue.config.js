const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/live-doc-js/'
    : '/',
  transpileDependencies: [
    "vuetify"
  ],
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        if (args[0])
          args[0].template = "./demo/public/index.html"
        return args
      })

    config.resolve.alias.set('@src', path.resolve(__dirname, 'src'))
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias.set('@dsrc', path.resolve(__dirname, 'demo/src'))
    config.resolve.alias.set('@dcomponents', path.resolve(__dirname, 'demo/src/components'))
  }
}