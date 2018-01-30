const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  //move css out of app.js
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]" 
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]___[hash:base64:5]" 
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
    ]
    },
    plugins: [
      CSSExtract,
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    // Enable importing JS files without specifying their's extenstion 
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
