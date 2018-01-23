const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'), // source folder path 
};

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: path.join(paths.SRC, 'app.js'),
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js',
    },
    // Tell webpack to use html plugin 
    // index.html is used as a template in which it'll inject bundled app.
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
    ],
  // Loaders configuration 
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        }, {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            'file-loader',
          ]
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
    },
    // Enable importing JS files without specifying their's extenstion 
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
}

