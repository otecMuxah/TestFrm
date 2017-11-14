const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    output: {filename: '[name]-bundle.js'},

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader', options: {presets: ['env']}}
        }]
    }
};
