import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import packageJson from './package.json' assert { type: 'json' }

/* ========================================================================

======================================================================== */
// The rollup config is an array of config objects. For this library we will
// need two separate configuration objects. The first one will export the
// javascript files. The second one is for exporting the types.

const config = [
  /* ======================
    JS files configuration
  ====================== */
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs', // CommonJS
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      // Docs indicate to 'preferably set as first plugin'
      peerDepsExternal(),
      // Allow for sass/scss usage out of the box. The docs say to
      // install node-sass, but don't do that. Just use npm i -D sass.
      postcss({
        plugins: [],
        minimize: true
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        ///////////////////////////////////////////////////////////////////////////
        //
        // https://github.com/codesyntax/ionic-react-photo-viewer/commit/78a97ad9cf1dcd691e397cc39ba0a7b9be6701a8
        // These next two lines may be a possible fix for the 'Failed to parse source map' bug.
        //
        //   sourceMap: true,
        //   inlineSources: true,
        //
        // This seemed to do the trick. Here is a stackoverflow with other possible solutions:
        // https://stackoverflow.com/questions/63218218/rollup-is-not-generating-typescript-sourcemap
        //
        ///////////////////////////////////////////////////////////////////////////
        sourceMap: true,
        inlineSources: true,
        // Presumably, the exclusions are all relative to the src folder.
        // In any case, it does not seem to be including the example app,
        // so there's no need to add that here.
        exclude: [
          '**/__tests__',
          '**/tests',
          '**/__mocks__',
          '**/mocks',
          '**/jest-setup.*',
          '**/setupTests.*',
          '**/*.test.*',
          '**/*.stories.*',
          '**/story.*'
        ]
      }),
      terser()
    ]
    // No need for external: []. We are using rollup-plugin-peer-deps-external instead
  },
  /* ======================
      types configuration
  ====================== */

  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    // Define files that are not relevant to the generation of .d.ts files.
    external: [/\.s?css$/]
  }
]

export default config
