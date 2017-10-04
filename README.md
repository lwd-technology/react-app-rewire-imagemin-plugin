# react-app-rewire-imagemin-plugin

Add [`imagemin-webpack-plugin`](https://github.com/Klathmon/imagemin-webpack-plugin) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin')

// Optimize images in the build
config = rewireImageminPlugin(config, env, {
  disable: process.env.NODE_ENV !== 'production',
  pngquant: {
    quality: '95-100'
  }
})
```
