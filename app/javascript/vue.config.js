module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./assets/stylesheets/global.scss";',
      },
    },
  },
};