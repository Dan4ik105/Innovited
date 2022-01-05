const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],
  
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // 3. Inject styles into DOM
            "css-loader", // 2. Turns css into commonjs
            "sass-loader", // 1. Turns sass into css
        ],
      },
    ]
  }
};
module.exports = (env, argv) => {
if (argv.mode === 'development') {}
 if (argv.mode === 'production') {}
return config;
}