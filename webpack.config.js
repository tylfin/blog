// webpack config.js
var path = require('path');

module.exports = {
    entry: {
        'blog-posts' : './app/scripts/components/blog-posts.jsx'
    },
    output: {
        path: path.join(__dirname, "./public/static/scripts/components"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'React']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
