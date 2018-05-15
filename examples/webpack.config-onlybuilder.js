var webpack = require('webpack');
var path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: ['babel-polyfill', 'fetch-ie8', './index.js'],
    output: {
        path: __dirname,
        filename: 'bundle-onlybuilder.js'
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextWebpackPlugin.extract("style-loader", "css-loader!sass-loader")
                // .extract({
                //     fallback: "style-loader",
                //     use:["css-loader", "sass-loader"]
                // })
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({__ONLY_BUILDER__:true}),
        new webpack.NormalModuleReplacementPlugin(
            /^react-awesome-query-builder/, function (data) {
                const suffix = data.request.substring('react-awesome-query-builder'.length);
                data.request = path.resolve(__dirname, '../modules/' + suffix);
            }
        ),
        new ExtractTextWebpackPlugin("style.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};