var path = require('path');


//Whenever "react" is required in the code it will fetch the minified React JS file instead of going to node_modules
//Whenever Webpack tries to parse the minified file, we stop it, as it is not necessary
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');


module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules|release/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader']
            }
        ],
        noParse: [pathToReact]
    },
};