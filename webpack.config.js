/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = function (env, args) {
  const isDev = args.mode == 'development'
  return {
    mode: args.mode,
    entry: './src/index.tsx',
    output: {
      filename: '[name].[hash:5].js',
      path: path.resolve(__dirname, 'docs'),
      // publicPath: 'https://cdn.example.com/assets/[hash]/',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: isDev ? 'source-map' : undefined,
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.js', '.ts', '.tsx', '.css'],
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    externals: {
      React: 'react',
      ReactDOM: 'react-dom',
      echarts: 'echarts',
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ['cache-loader', 'babel-loader', 'eslint-loader'],
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
      // 告诉 Webpack 使用了哪些动态链接库
      new webpack.DllReferencePlugin({
        // 描述 lodash 动态链接库的文件内容
        manifest: require('./docs/assets/dll/lodash.manifest.json'),
      }),
      new CopyPlugin({ patterns: [{ from: 'src/assets/json', to: 'assets/json' }] }),
      new MiniCssExtractPlugin({ filename: 'assets/css/[name].[hash:5].css' }),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // },

    devServer: {
      compress: true,
      hot: true,
      port: 9000,
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            // priority: -10,
            chunks: 'all',
            name: 'vendor',
            // enforce: true,
          },
          default: {
            chunks: 'all',
            minChunks: 2,
            // priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      // minimize: true,
      // minimizer: [
      //   new TerserPlugin({
      //     // 删除comment
      //     // terserOptions: { output: { comments: false } },
      //     // extractComments: false,
      //   }),
      // ],
    },
  }
}
