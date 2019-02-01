const path = require('path');
const webpack = require('webpack');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CircularDependencyPlugin = require('circular-dependency-plugin');

const rootFolder = path.resolve(__dirname, '.');

console.log('@@@@@@@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
       // 'polyfills': './ClientApp/polyfills.ts',
        'app': [
         //   './ClientApp/boot.browser.ts',
            './node_modules/olbico-corporate-identity/src/js/olbico.js',
            './node_modules/olbico-corporate-identity/src/sass/screen.scss',
            './node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js',
           // './ClientApp/styles/custom.css',
            './node_modules/nouislider/distribute/nouislider.css',
            './node_modules/olb-drag-to-select/scss/ngx-drag-to-select.scss',
            './node_modules/datatables.net-select-bs/css/select.bootstrap.css',
            './node_modules/@fortawesome/fontawesome-free/css/all.css']
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
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(rootFolder, '/wwwroot/'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    module: {
        rules: [
            { test: /\.ts$/, exclude: /node_modules/, include: /ClientApp/, use: ['ts-loader', 'angular-router-loader', 'angular2-template-loader', 'source-map-loader'] }, //, 'tslint-loader' ] },
            { test: /\.font\.js/, use: [MiniCssExtractPlugin.loader, 'css-loader', { loader: 'webfonts-loader', options: { publicPath: "/v2/"} }]},
            { test: /\.(png|jpg|gif|svg|eot)$/, use: 'file-loader?name=assets/[name].[ext]' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=assets/[name].[ext]&mimetype=application/octet-stream" },
            { test: /favicon.ico$/, use: 'file-loader?name=/[name].[ext]' },
            {
                test: /\.(scss|css)(\?|$)/,
                loaders: ['to-string-loader'].concat(
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    {
                        loader: 'sass-loader',
                        options: {
                            "includePaths": [
                                path.join(rootFolder, '/node_modules/olbico-corporate-identity/src/sass/')
                            ],
                            sourceMap: true
                        }
                    }
                )
            },
            { test: /\.html$/, use: 'html-loader?minimize=false' },
            { test: /\.json$/, loader: "file-loader", options: { name: 'translations/[name].[ext]' } }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dist/[name].bundle.css'
        }),
        new HardSourceWebpackPlugin({
            cacheDirectory: '../node_modules/.cache/hard-source/[confighash]',
            configHash: function (webpackConfig) {
                return require('node-object-hash')().hash(webpackConfig);
            },
            environmentHash: { root: process.cwd(), directories: ['node_modules'], files: ['package.json'] }
        }),
        function () {
            this.plugin('watch-run',
                function (watching, callback) {
                    console.log('\x1b[33m%s\x1b[0m', `Begin compile at ${(new Date()).toTimeString()}`);
                    callback();
                });
        },
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/14898
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/20357
        new webpack.IgnorePlugin(/^vertx$/), // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
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
            { from: './favicon.ico', to: '', cache: true },
           // { from: './ClientApp/images/', to: 'assets/' },
            { from: './node_modules/flexmonster/', to: 'flexmonster/', cache: true }
        ])
    ]
};
