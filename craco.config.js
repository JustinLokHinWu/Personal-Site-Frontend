const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ED6A5A',
              '@layout-header-background': '#2b303a',
              '@layout-footer-background': '@layout-header-background',
              '@text-color-inverse': '#FFF9EC',
              '@layout-body-background': '#FFFFFF',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
