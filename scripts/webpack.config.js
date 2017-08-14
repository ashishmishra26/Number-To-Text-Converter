const path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "./build/bundle.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.ejs'
    })
  ],
    module: {
        loaders: [{
            test: /(\.js)$/,
            loader: "babel-loader",
            query: {
                presets: "es2015"
            },

            exclude: /(node_modules)/
        },

        ]
    }
};