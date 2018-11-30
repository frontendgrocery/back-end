require('babel-core/register')({
    'presets': ['stage-2'],
})
require('babel-polyfill')
require('./src/server')