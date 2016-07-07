const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');

rollup.rollup({
  entry: 'index.js',
  plugins: [
    babel(),
  ],
}).then(bundle => {
  // CommonJS
  bundle.write({
    format: 'cjs',
    dest: 'dest/index.js',
  });
  // UMD
  bundle.write({
    format: 'umd',
    moduleName: pkg.name,
    dest: 'dest/index.umd.js',
  });
});
