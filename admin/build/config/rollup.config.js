import babel from 'rollup-plugin-babel'

const pkg  = require('../../package')
const year = new Date().getFullYear()

const globals = {
  jquery: 'jQuery'
}

export default {
  input  : 'build/js/AdminLTE.js',
  output : {
    banner: `/*!
 
    file  : 'dist/js/adminlte.js',
    format: 'umd',
    globals,
    name  : 'adminlte'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    })
  ]
}
