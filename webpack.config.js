/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { env } = require('process')

const isDev = env.NODE_ENV
module.exports = {
  mode: env.NODE_ENV,
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'https://cdn.example.com/assets/[hash]/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev ? 'source-map' : undefined,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.ts', '.tsx', '.css'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(jpe?g|png|gif|bmp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024, // 10k
              name: `assets/imgs/[name]${isDev ? '' : '.[hash:base64:8]'}.[ext]`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: {
                auto: true,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].[hash:5].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  devServer: {
    compress: true,
    hot: true,
    port: 9000,
  },
}
