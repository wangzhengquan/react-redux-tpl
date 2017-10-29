const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

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

        /**
         * generate manifest.json
         */
        new ManifestPlugin()
    ],
};