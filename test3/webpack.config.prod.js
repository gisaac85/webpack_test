const path = require('path');
const webpack = require('webpack');

const webpackTools = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rootFolder = path.resolve(__dirname, '.');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {
    mode: "production",
    entry: {
        'polyfills': './ClientApp/polyfills.ts',
        'app': [
            './ClientApp/boot.browser.ts',
            './node_modules/olbico-corporate-identity/dist/js/olbico.js',
            './node_modules/olbico-corporate-identity/dist/stylesheets/screen.css',
            './node_modules/olbico-corporate-identity/dist/stylesheets/olbico-icons.css']
    },
    output: {
        path: `${rootFolder}/wwwroot/`,
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[name].chunk.js',
        publicPath: '/v2/'
    },
    resolve: { extensions: ['.ts', '.js', '.json'] },
    optimization: {
        concatenateModules: true,
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](?!olbico|flexmonster)/,
                    name: 'vendors',
                    chunks: "all",
                    enforce: true
                },
                polyfills: {
                    test: 'polyfills',
                    name: 'polyfills',
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            { test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, use: '@ngtools/webpack' },
            { test: /\.(png|jpg|gif|svg|eot)$/, use: 'file-loader?name=assets/[name].[ext]' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/octet-stream" },
            { test: /favicon.ico$/, use: 'file-loader?name=/[name].[ext]' },
            { test: /\.css(\?|$)/, use: [MiniCssExtractPlugin.loader, "css-loader"] }, // todo: This gives issues. When fixed, change publish in .csproj file to use prod
            { test: /\.html$/, use: 'html-loader?minimize=false' },
            { test: /\.json$/, loader: "file-loader", options: { name: 'translations/[name].[ext]' } }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dist/[name].bundle.css'
        }),
        new webpackTools.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.aot.json'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.Tether': 'tether',
            tether: 'tether',
            Tether: 'tether'
        }),
        new MergeJsonWebpackPlugin({
            encoding: 'utf-8',
            output: {
                groupBy: [
                    {
                        pattern: "./ClientApp/**/translations/en.json",
                        fileName: "./translations/en.json"
                    },
                    {
                        pattern: "./ClientApp/**/translations/nl.json",
                        fileName: "./translations/nl.json"
                    },
                    {
                        pattern: "./ClientApp/**/translations/fr.json",
                        fileName: "./translations/fr.json"
                    }
                ]
            }
        }),
        new CopyWebpackPlugin([
            { from: './ClientApp/images/', to: 'assets/' }
        ])
    ]
};

