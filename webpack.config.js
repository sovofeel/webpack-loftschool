const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Hello Loftshool",
      template: "src/index.html"
    })
  ]
}
