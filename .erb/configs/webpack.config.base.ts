/**
 * Base webpack config used across other specific configs
 */

import webpack from "webpack";
import TsconfigPathsPlugins from "tsconfig-paths-webpack-plugin";
import webpackPaths from "./webpack.paths";
import { dependencies as externals } from "../../release/app/package.json";
import path from "path";

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: "errors-only",

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: "esnext"
            }
          }
        }
      },
      {
        test: /\.wasm$/,
        type: "asset/resource",
      },
      {
        test: /\.step$/,
        type: "asset/source",
        generator: {
          filename: "static/chunks/[name].[hash][ext]"
        },
      },
      {
        test: /\.igs$/i,
        type: 'asset/source'
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      // {
      //   test: /\.css$/,
      //   include: [webpackPaths.srcRendererPath],
      //   use: ['style-loader', 'css-loader', 'postcss-loader'],
      // }
    ]
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: "commonjs2"
    }
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: [".js", ".jsx", ".mjs", ".json", ".ts", ".tsx"],
    modules: [webpackPaths.srcPath, "node_modules"],
    // There is no need to add aliases here, the paths in tsconfig get mirrored
    plugins: [new TsconfigPathsPlugins()],
    // fallback: {
    //   path: require.resolve("path-browserify"),
    //   fs: require.resolve("browserify-fs"),
    //   util: require.resolve("util/"),
    //   stream: require.resolve("stream-browserify"),
    //   child_process: require.resolve("cross-spawn"),
    //   crypto: require.resolve("crypto-browserify"),
    // }
    fallback: {
      fs: false,
      perf_hooks: false,
      os: false,
      worker_threads: false,
      crypto: false,
      stream: false,
      path: false,
      child_process: false,
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production"
    })
  ],

  experiments: {
    syncWebAssembly: true,
    asyncWebAssembly: true,
  }
};

export default configuration;
