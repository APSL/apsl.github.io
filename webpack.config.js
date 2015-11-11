var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.jsx'),

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
    new ExtractTextPlugin('css/[name].css')
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
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
