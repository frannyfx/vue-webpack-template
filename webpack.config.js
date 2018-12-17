// Imports
let path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Exports
module.exports = {
    entry: {
        main: "./client/index.js"
    },
    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                include: path.resolve(__dirname, "client/components"),
                use: "vue-loader"
            }, {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};