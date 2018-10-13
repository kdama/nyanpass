import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const PRODUCTION = process.env.NODE_ENV !== "production";
const VERBOSE = process.argv.includes("--verbose");

const entry = {
  main: ["./src/scripts/index.tsx"],
};

const config: webpack.Configuration = {
  cache: PRODUCTION,
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "./build/dist"),
    disableHostCheck: true,
    historyApiFallback: false,
    noInfo: false,
    quiet: false,
    stats: {
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      errorDetails: true,
      hash: true,
      modules: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000,
    },
  },
  devtool: PRODUCTION ? "inline-source-map" : false,
  entry,
  mode: "development",
  module: {
    exprContextCritical: false,
    rules: [
      {
        include: [path.resolve(__dirname, "./src")],
        loader: "ts-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build/dist/"),
    publicPath: "",
  },
  plugins: PRODUCTION
    ? [
        new HtmlWebpackPlugin({
          title: "nyanpass",
        }),
        new webpack.LoaderOptionsPlugin({
          debug: PRODUCTION,
        }),
      ]
    : [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
      ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  stats: {
    assets: VERBOSE,
    cached: VERBOSE,
    children: VERBOSE,
    chunkModules: VERBOSE,
    chunkOrigins: VERBOSE,
    chunks: VERBOSE,
    colors: PRODUCTION,
    errorDetails: VERBOSE,
    hash: true,
    modules: VERBOSE,
    reasons: VERBOSE,
    source: VERBOSE,
    timings: VERBOSE,
    version: VERBOSE,
  },
};

export default config;
