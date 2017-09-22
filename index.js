const ImageminPlugin = require('imagemin-webpack-plugin').default

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireImageminPlugin(config, env, imageminPluginOptions = {}) {
  // Add the Imagemin plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new ImageminPlugin(imageminPluginOptions)
  ])

  return config
}

module.exports = rewireImageminPlugin
