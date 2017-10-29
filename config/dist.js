const baseConfig = require('./base')
const defaultConfig = require('./default')


module.exports = {
  ...baseConfig, 
  devtool: 'source-map',
   
  plugins: [
    ...baseConfig.plugins
  ]

}