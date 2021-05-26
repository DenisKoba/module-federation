const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "any",
            filename: "remoteEntry.js",
            exposes: {},
            remotes: {
                custom: "custom@http://localhost:8080/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};