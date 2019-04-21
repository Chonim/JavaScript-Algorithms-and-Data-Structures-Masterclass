module.exports = {
  'env': {
    'jest': true,
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'plugins': ['jest'],
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
  }
}
