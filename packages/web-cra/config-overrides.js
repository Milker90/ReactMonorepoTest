const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const {
  addBabelPlugins,
  addBabelPresets,
  babelInclude,
  addWebpackModuleRule,
  override,
  adjustStyleLoaders,
} = require('customize-cra')
const { produce } = require('immer')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp('src'), resolveApp('../common/src')]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
  )

  config.module.rules[0].include = appIncludes
  config.module.rules[1].oneOf[2].include = appIncludes
  config.module.rules[1].oneOf[2].options.plugins.push(
    require.resolve('babel-plugin-react-native-web'),
  )

  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
  )

  return config
}

const updateWebpackModuleRules = (config) => {
  const rules = config.module.rules
  console.log(`rules--${rules.length}`)
  // if (rules.length !== 3) {
  //   throw new Error('Unexpected CRA config. Exiting.')
  // }

  const newConfig = produce(config, (cfg) => {
    const sourceMapLoader = {
      enforce: 'pre',
      exclude: /@babel(?:\/|\\{1,2})runtime/,
      test: /\.(js|mjs|jsx|ts|tsx|css)$/,
      use: 'source-map-loader',
    }
    const rules = cfg.module.rules
    rules.splice(1, 0, sourceMapLoader)
  })

  return newConfig
}

module.exports = override(
  // updateWebpackModuleRules,
  // adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
  //   css.options.sourceMap = true // css-loader
  //   postcss.options.sourceMap = true // postcss-loader
  //   // when enable pre-processor,
  //   // resolve-url-loader will be enabled too
  //   if (resolve) {
  //     resolve.options.sourceMap = true // resolve-url-loader
  //   }
  //   // pre-processor
  //   if (processor && processor.loader.includes('sass-loader')) {
  //     processor.options.sourceMap = true // sass-loader
  //   }
  // }),
  addWebpackModuleRule({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  }),
  ...addBabelPresets(
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-react',
    '@babel/preset-flow',
  ),
  ...addBabelPlugins(
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ),
  babelInclude([
    path.resolve(__dirname, 'index.js'),
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, '../../node_modules/react-native-web'),
    path.resolve(__dirname, '../../packages/common'),
    path.resolve(__dirname, '../../node_modules/react-native-paper'),
    path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
  ]),
)
