var path = require('path');                         //node utility
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {                                       //output path must be absolute path, not relative like entry
        path: path.resolve(__dirname, 'dist'),      // path.resolve
        filename: "bundle.js",
        publicPath: "/dist"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,                        // uses Regex (b/w these two forward-slash we write the type - for eg. \.js$
                use: [
                    'style-loader',                 // executes these loaders in reverse order i.e. css-loader first and then style-loader
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()                        //minification
    ]
};