const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'carts',
            filename: 'remoteEntry',
            exposes: {
                './CartShow': './src/index'
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}