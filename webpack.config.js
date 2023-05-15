const Path = require('path');
const { CssWebpackConfig, JavascriptWebpackConfig } = require('@silverstripe/webpack-config');

const PATHS = {
  ROOT: Path.resolve(),
};

const config = [
  new JavascriptWebpackConfig('js', PATHS)
   .setEntry({
      bundle: `${PATHS.SRC}/bundles/sliderfield.js`
   })
   .mergeConfig({
    output: {
      path: PATHS.DIST,
      filename: 'js/[name].js',
    },
   })
  .getConfig(),
  new CssWebpackConfig('css', PATHS)
    .setEntry({
      bundle: `${PATHS.SRC}/styles/sliderfield.scss`,
    })
    .mergeConfig({
      output: {
        path: PATHS.DIST,
        filename: 'styles/[chunkhash][name].css',
      },
     })
    .getConfig(),
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : module.exports = config;


// const Path = require('path');
// const webpackConfig = require('@silverstripe/webpack-config');
// const {
//   resolveJS,
//   externalJS,
//   moduleJS,
//   pluginJS,
//   moduleCSS,
//   pluginCSS,
// } = webpackConfig;

// const ENV = process.env.NODE_ENV;
// const PATHS = {
//   MODULES: 'node_modules',
//   FILES_PATH: '../',
//   ROOT: Path.resolve(),
//   SRC: Path.resolve('client/src'),
//   DIST: Path.resolve('client/dist'),
// };

// const config = [
//   {
//     name: 'js',
//     entry: {
//       sliderfield: `${PATHS.SRC}/bundles/sliderfield.js`,
//     },
//     output: {
//       path: PATHS.DIST,
//       filename: 'js/[name].js',
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     resolve: resolveJS(ENV, PATHS),
//     externals: externalJS(ENV, PATHS),
//     module: moduleJS(ENV, PATHS),
//     plugins: pluginJS(ENV, PATHS),
//   },
//   {
//     name: 'css',
//     entry: {
//       sliderfield: `${PATHS.SRC}/styles/sliderfield.scss`,
//     },
//     output: {
//       path: PATHS.DIST,
//       filename: 'styles/[name].css',
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     module: moduleCSS(ENV, PATHS),
//     plugins: pluginCSS(ENV, PATHS),
//   },
// ];

// // Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
// module.exports = (process.env.WEBPACK_CHILD)
//   ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
//   : module.exports = config;
