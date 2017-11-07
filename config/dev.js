const baseConfig = require('./base')
const defaultConfig = require('./default')
const {NamedModulesPlugin, HotModuleReplacementPlugin} = require('webpack');

module.exports = {
	...baseConfig, 
	devtool: 'inline-source-map',
  devServer: {
      contentBase: defaultConfig.distDir,
      hot: true,
      // compress: true,
      host: "0.0.0.0",
      port: 8081
  },
  plugins: [
  	...baseConfig.plugins,
  	new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ]

}
