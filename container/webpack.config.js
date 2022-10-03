const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry',
                carts: 'carts@http://localhost:8082/remoteEntry'
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}