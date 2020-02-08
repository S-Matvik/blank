const path = require('path');

module.exports = {
    mode: 'development',
    entry: './resources/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS
                ]
            }
        ]
    }
};
