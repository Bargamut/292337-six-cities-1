const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, `public`)
  },
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: `ts-loader`
      }
    ]
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.json`]
  },
  devtool: `source-map`,
  stats: `errors-only`
};
