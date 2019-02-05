const path = require('path');

const DIST = path.resolve(__dirname, './');

module.exports = {
  target: 'node',
  
  entry: {
    'out/src/index': './src/index.ts',
    'out/src/cli/index': './src/cli/index.ts',
    'out/src/i18n/index': './src/i18n/index.ts',
    'out/src/predicates/predicate': './src/predicates/predicate.ts',
    'out/src/requestService/index': './src/requestService/index.ts',
    'out/src/test/index': './src/test/index.ts',
    'out/src/types/index': './src/types/index.ts'

  },
  output: {
      path: DIST,
      filename: '[name].js',
      libraryTarget: 'commonjs',
  },
  devtool: 'source-map',
  externals: {
      // vscode: 'commonjs vscode',
      'vscode-nls': 'commonjs vscode-nls',
    },
  resolve: {
      extensions: ['.ts', '.js']
  },
  module: {
      rules: [{
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [{
              loader: 'ts-loader',
          }]
      }]
  }
}