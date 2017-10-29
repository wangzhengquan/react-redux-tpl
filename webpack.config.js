const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
module.exports = {
    entry: {
        app: path.join(srcDir, 'index.js')

    },

    output: {
        filename: '[name].js',
        path: distDir,
        publicPath: '/'
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: distDir,
        hot: true
        // compress: true,
        // port: 8080
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(js|jsx)$/,
            use: [
                'react-hot'

            ],
            include: [
                'src'
            ]

        }]
    },

    plugins: [
        new CleanWebpackPlugin([distDir]),
        /**
         * https://github.com/jantimon/html-webpack-plugin
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(srcDir, 'index.html')
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        /**
         * generate manifest.json
         */
        new ManifestPlugin()
    ],
};