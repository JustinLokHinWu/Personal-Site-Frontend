const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#F67E7D',
                        '@layout-header-background': '#2B303A',
                        '@layout-footer-background': '@layout-header-background'
                    },
                    javascriptEnabled: true,
                },
            },
        },
        },
    ],
};