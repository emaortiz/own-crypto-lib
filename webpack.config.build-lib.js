const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {

    const conf = {
        plugins: [
            new webpack.DefinePlugin({
              IS_BROWSER: true
            })
        ],
        mode: 'development',
        devServer: {
            open: true,
            openPage: [`client/example.html`],
            contentBase: path.join(__dirname, '/'),
            watchContentBase: true,
            port: 8080,
            host: argv.mode === 'production' ? `localhost` : `localhost`,
            disableHostCheck: true,
        },

        entry: {
            'mylib': [`./src/crypto_util.js`],
        },
        // library building properties for (1-1)
        output: {
            path: path.join(__dirname, '/'),
            filename: argv.mode === 'production' ? `[name].min.js` : `[name].develop.js`,
            library: '',
            libraryExport: '',
            libraryTarget: 'umd',
            globalObject: 'this',
        },
        optimization: {
            minimizer: [new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                }
            })],
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        },
        resolve: {
            extensions: ['.js'],
        },
    };

    if (argv.mode !== 'production') {
        conf.devtool = 'inline-source-map';
    }

    return conf;

};