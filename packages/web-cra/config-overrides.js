const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const {
  addBabelPlugins,
  addBabelPresets,
  babelInclude,
  addWebpackModuleRule,
  override,
} = require('customize-cra')

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

module.exports = override(
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
