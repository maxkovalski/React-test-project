var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: { 
    preLoaders: [ 
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [ 
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      { 
        test: /\.css$/, 
        exclude: /\.useable\.css$/, 
        loader: "style!css" 
      },
      { 
        test: /\.useable\.css$/, 
        loader: "style/useable!css" 
      }
    ],
    devServer: {
      historyApiFallback: true
    }
  }
}