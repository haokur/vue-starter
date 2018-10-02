let path = require('path')

const Entries = [
    'double-eleven',
    'mookcake-test',
    'typescript-starter'
];
const Pages = {};
Entries.forEach(key => Object.assign(Pages, {
    [key]: {
        entry: `src/modules/${key}/${key}.js`,
        template: `src/modules/${key}/${key}.html`,
        filename: `${key}.html`,
    }
}))
// console.log(Pages);

module.exports = {
    lintOnSave: false, //禁用eslint
    baseUrl: process.env.NODE_ENV === "production" ? '/' : '/',
    productionSourceMap: false,
    pages: Pages,
    lintOnSave: false,
    devServer: {
        index: `${Entries[0]}.html`, //默认启动serve 打开page1页面
        open: process.platform === 'darwin',
        host: '',
        port: 9088,
        https: false,
        hotOnly: false,
        proxy: {
            '/xrf/': {
                target: 'http://reg.tool.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/xrf': ''
                }
            },
        }, // 设置代理
        before: app => {}
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.limit = 100
                return options
            })
        Object.keys(Pages).forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`);
        });
        if (process.env.NODE_ENV === "production") {
            config.plugin("extract-css").tap(() => [{
                path: path.join(__dirname, "./dist"),
                filename: "css/[name].[contenthash:8].css"
            }]);
        }
    },
    configureWebpack: config => {
        //		if(process.env.NODE_ENV === "production") {
        //			config.output = {
        //				path: path.join(__dirname, "./dist"),
        //				filename: "js/[name].[contenthash:8].js"
        //			};
        //		}
    }
}
