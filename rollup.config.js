import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  format: 'cjs',
  plugins: [babel({
    presets: [
      ['env', { modules: false }],
    ],
    plugins: [
      'external-helpers',
    ],
    ignore: 'node_modules/**',
  })],
  external: [
    'codemirror',
  ],
};
