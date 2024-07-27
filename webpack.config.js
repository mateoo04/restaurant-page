const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                type: 'asset/resource',
            }
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles:['src/*.html','src/*.js', 'dist/style.css'],
    }
};