var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'app/index.jsx')
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '../'
  },

  devServer: {
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '\'' + process.env.NODE_ENV + '\''
    })
  ],

  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc')
  },

  module: {
    loaders: [
      {
        loader: 'babel',
        include: path.resolve(__dirname, 'app'),  // exclude: /(node_modules|bower_components)/,
        test: /\.jsx?$/,
        query: {
          cacheDirectory: true,
          // plugins: ['transform-runtime'],  // Have issues with Babel 6 at the moment.
          plugins: ['transform-object-rest-spread'],
          presets: ['es2015', 'react']
        }
      },
      {
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'app'),
        test: /\.jsx?$/
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },{
        test: /\.ico$/,
        loader: 'file?name=img/[name].[ext]'
      },{  // bootstrap & fontawesome
        test: /\.svg(\?.+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=8192&mimetype=image/svg+xml'
      },{
        test: /\.(woff|woff2)(\?.+)?$/,
        loader:'url?name=fonts/[name].[ext]&limit=8192&mimetype=application/font-woff'
      },{
        test: /\.(eot|otf|ttf)(\?.+)?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=8192'
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
