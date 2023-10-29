const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pkg = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const LIBRARY_NAME = pkg.name;
const PROJECT_NAME = pkg.name.replace("@", "").replace("/", "-");

const defaultConfig = env => ({
  mode: env.prod ? "production" : "development",
  devtool: 'source-map',
  resolve: {
    alias: {
      typescript: false,
      'readable-stream': path.join(__dirname, 'node_modules/readable-stream'),
      //'lru-cache': path.join(__dirname, 'node_modules/lru-cache'),
      'jsonld-streaming-parser': path.join(__dirname, 'node_modules/jsonld-streaming-parser'),
    },
    fallback: {
      path: false,
      fs: false,
      os: false,
      util: false,
      stream: false,
      ReadableStream: false,
      url: false,
      assert: false,
      tls: false,
      net: false,
      buffer: require.resolve("buffer"),
    }
  },
  optimization: {
    minimize: env.prod,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_classnames: true,
          sourceMap: true,
        }
      })
    ],
    portableRecords: true,
    usedExports: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 300000,
    maxAssetSize: 300000
  },
});

const bundle = (env, module, entry = 'index', suffix = '') => {
  const filename = `${PROJECT_NAME}${suffix}${module ? ".es" : ""}${env.prod ? ".min" : ""}`;
  return {
    name: PROJECT_NAME,
    entry: `./dist/esm5/${entry}.js`,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `web/${filename}.js`,
      library: module ? undefined : ['OpenHPS', LIBRARY_NAME.substring(LIBRARY_NAME.indexOf("/") + 1)],
      libraryTarget: module ? "module" : "umd",
      umdNamedDefine: !module,
      globalObject: module ? undefined : `(typeof self !== 'undefined' ? self : this)`,
      environment: { module },
    },
    experiments: {
      outputModule: module,
      topLevelAwait: module
    },
    externalsType: module ? "module" : undefined,
    externals: function (_, request, callback) {
      const knownExternals = {
        '@openhps/geospatial': module ?  "./openhps-geospatial.es" + (env.prod ? ".min" : "") + ".js" : {
          commonjs: '@openhps/geospatial',
          commonjs2: '@openhps/geospatial',
          amd: 'geospatial',
          root: ['OpenHPS', 'geospatial']
        },
        '@openhps/rf': module ?  "./openhps-rf.es" + (env.prod ? ".min" : "") + ".js" : {
          commonjs: '@openhps/rf',
          commonjs2: '@openhps/rf',
          amd: 'rf',
          root: ['OpenHPS', 'rf']
        },
        '@openhps/video': module ?  "./openhps-video.es" + (env.prod ? ".min" : "") + ".js" : {
          commonjs: '@openhps/video',
          commonjs2: '@openhps/video',
          amd: 'video',
          root: ['OpenHPS', 'video']
        },
        '@openhps/fingerprinting': module ?  "./openhps-fingerprinting.es" + (env.prod ? ".min" : "") + ".js" : {
          commonjs: '@openhps/fingerprinting',
          commonjs2: '@openhps/fingerprinting',
          amd: 'fingerprinting',
          root: ['OpenHPS', 'fingerprinting']
        }
      };
      const external = knownExternals[request];
      if (external) {
        if (!module || typeof external === 'object') {
          return callback(null, external);
        } else if (module && typeof external === 'string') {
          return callback(null, `promise import('${external}')`)
        }
      }
      callback();
    },
    devtool: 'source-map',
    plugins: !module ? [new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerPort: 'auto',
      openAnalyzer: false,
      reportFilename: `web/report_${filename}.html`
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })] : [new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })],
    ...defaultConfig(env)
  };
};

module.exports = env => [
  bundle(env, true, 'index.engine', '.engine'),
  bundle(env, true, 'index.minimal', ''),
  bundle(env, false, 'index.minimal', ''),
  bundle(env, true, 'index', '.all'),
  bundle(env, false, 'index', '.all'),
  bundle(env, true, 'index.sparql', '.sparql'),
  bundle(env, false, 'index.sparql', '.sparql'),
  bundle(env, true, 'index.serialization', '.serialization'),
  bundle(env, false, 'index.serialization', '.serialization'),
  bundle(env, true, 'index.vocab', '.vocab'),
  bundle(env, false, 'index.vocab', '.vocab'),
];
