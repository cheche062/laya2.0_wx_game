const path = require('path');

// 打包成功的提示
const WebpackNotifierPlugin = require('webpack-notifier');
let plugins = [
    new WebpackNotifierPlugin()
];

module.exports = {
    entry: ['./src/Main.js'],
    output: {
        filename: 'bundle.js', //出口文件
        publicPath: '/bin/',
        path: path.resolve('bin/js')
    },
    devServer: {
        port: 8087,
        inline: true
    },
    plugins: plugins,
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            // query: { presets: ['es2015'] },
            exclude: /node_modules/ //排除项目
        }]
    },

    resolve: {
        extensions: [".js"]
    }
}
