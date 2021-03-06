const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV
const path = require('path')

const setPath = folderName => {
  return path.join(__dirname, folderName)
  // вспомогательная функция проставления пути
}

const buildingForLocal = () => {
  return NODE_ENV === 'development'
}

module.exports = {
  entry: {
    build: path.join(setPath('src'), 'index.js'),
    vendor: ['lodash', 'vue']
  },
  output: {
    path: buildingForLocal() ? path.resolve(__dirname) : setPath('dist'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: ['babel-loader']
          }
        }
      },
      {
        test: /\.(png|jpg|gifg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Hello Loftshool',
      template: 'src/index.html'
    }),
    new VueLoaderPlugin(),
    new FaviconsWebpackPlugin('./src/assets/img/favicon.png')
  ]
}
