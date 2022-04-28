const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#F25F5C',
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