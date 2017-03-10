var webpack = require("webpack");
var path = require('path');
var gutil = require("gulp-util");
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var myConfig = {
  debug: true,
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'app/main.js')],
  context: path.resolve(process.cwd(), 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: ""
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.jade$/,
      loader: 'html!jade-html'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.sass$/,
      loader: "style!css!postcss-loader!sass?indentedSyntax&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") + "&includePaths[]=" + path.resolve(__dirname, "./mixins/app_mixins")
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=10000&name=[path][name]-[hash:8].[ext]'
    }, {
      test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)(\?v=[\d\.]+)?$/,
      loader: 'file?name=files/[hash].[ext]'
    }]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  resolve: {
    root: [path.resolve(process.cwd(), 'app'), path.resolve(__dirname, 'node_modules')], //设置搜索目录
    alias: {
      images: './images'
    },
    extensions: ['', '.js', '.jade', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // new webpack.ProgressPlugin(function handler(percentage, msg) {
    //   gutil.log(msg)
    // })
  ]
};


module.exports = myConfig;
