const path = require('path')
const { merge } = require('webpack-merge')
const commonconfig = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(commonconfig,
    (
    module.exports = {
        mode: 'development',
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true
            },
            devServer: {
                static: path.resolve(__dirname,'dist'),
                historyApiFallback: true,
                port: 3000,
                hot: true
            },
            plugins: [
                new ModuleFederationPlugin({
                    name: 'mfe-react-container-ui',
                    filename: 'remoteEntry.js',
                    remotes: {},
                    shared: {
                        react: {
                            requiredVersion: false,
                            singleton: true
                        }
                    }
                }),
                new HtmlWebpackPlugin({
                    title: "React Container UI",
                    template: './public/index.html',
                    favicon: './public/favicon.ico',
                    path: '/',
                }),
            ]
        }
    )
)