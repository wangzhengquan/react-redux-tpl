const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const defaultConfig = require('./default')

module.exports = {
    entry: {
        app: path.join(defaultConfig.srcDir, 'index.js')

    },

    output: {
        filename: '[name].js',
        path: defaultConfig.distDir,
        publicPath: '/'
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
                
                'babel-loader'

            ],
            include: [
                defaultConfig.srcDir
            ]

        }]
    },

    plugins: [
        new CleanWebpackPlugin([defaultConfig.distDir]),
        /**
         * https://github.com/jantimon/html-webpack-plugin
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(defaultConfig.srcDir, 'index.html')
        }),

        /**
         * generate manifest.json
         */
        new ManifestPlugin()
    ],
};