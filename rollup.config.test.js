import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import multi from '@rollup/plugin-multi-entry'
import json from '@rollup/plugin-json'
import css from 'rollup-plugin-css-only'
import command from 'rollup-plugin-command'

export default {
  input: 'src/**/**.spec.js',
  output: { format: 'cjs', file: 'dist/test.js' },
  external: ['tape'],
  plugins: [
    multi(),
    svelte({
      compilerOptions: {
        dev: true,
      },
    }),
    css({ output: 'public/build/bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    json(),
    commonjs(),
    builtins(),
    command('yarn test:run'),
  ],
}
