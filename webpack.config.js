// webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/components/ChatWidget.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mm-ai-chat-widget.js',
        library: 'MMAIChatWidget',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};