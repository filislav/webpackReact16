const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  module:{
    rules:[
      {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/},
      {test:/\.css$/i,use:['style-loader','css-loader']},
      {test: /\.svg$/, loader: 'svg-inline-loader' },
      {test:/\.svg$/i,use:[{loader:'file-loader',options:{exModule:false}}],},
      {
        test: /\.(svg|png|ttf|woff|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: './src/fonts',
            }
          }
        ]
      }
    ],
  },
};