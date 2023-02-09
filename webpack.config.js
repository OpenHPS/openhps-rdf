const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pkg = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const LIBRARY_NAME = pkg.name;
const PROJECT_NAME = pkg.name.replace("@", "").replace("/", "-");

const defaultConfig = env => ({
  mode: env.prod ? "production" : "development",
  devtool: 'source-map',
  resolve: {
    alias: {
      typescript: false,
      'readable-stream': path.join(__dirname, 'node_modules/readable-stream'),
      'lru-cache': path.join(__dirname, 'node_modules/lru-cache'),
      'jsonld-streaming-parser': path.join(__dirname, 'node_modules/jsonld-streaming-parser')
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
    entry: `./dist/esm/${entry}.js`,
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
    },
    externalsType: module ? "module" : undefined,
    externals: {
      '@openhps/core': module ? "./openhps-core.es" + (env.prod ? ".min" : "") + ".js" : {
        commonjs: '@openhps/core',
        commonjs2: '@openhps/core',
        amd: 'core',
        root: ['OpenHPS', 'core']
      }
    },
    devtool: 'source-map',
    plugins: [new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerPort: 'auto',
      openAnalyzer: false,
      reportFilename: `web/report_${filename}.html`
    })],
    ...defaultConfig(env)
  };
};

module.exports = env => [
  bundle(env, true, 'index', '.all'),
  bundle(env, false, 'index', '.all'),
  bundle(env, true, 'index.sparql', '.sparql'),
  bundle(env, false, 'index.sparql', '.sparql'),
  bundle(env, true, 'index.serialization', '.serialization'),
  bundle(env, false, 'index.serialization', '.serialization'),
  bundle(env, true, 'index.vocab', '.vocab'),
  bundle(env, false, 'index.vocab', '.vocab'),
];
