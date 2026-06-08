import antfu, { react } from '@antfu/eslint-config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  jsonc: true,
  yaml: false,

  ignores: [
    '**/dist',
    '**/build',
    '**/node_modules/',
    '**/.react-router',
  ],
}, {
  rules: {
    'style/semi': ['error', 'never'],
    'no-console': ['warn'],
    'camelcase': ['error'],
    'ts/explicit-function-return-type': ['off'],
    'node/prefer-global/process': ['off'],
    'ts/consistent-type-imports': ['off'],
  },
}, react({
  files: ['**/*.?([cm])[jt]s?(x)'],
  rules: {
    'react-refresh/only-export-components': ['off'],
  },
}), {
  files: ['**/*.?([cm])[jt]s?(x)'],
  rules: {
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
  },
}, ...eslintPluginAstro.configs.recommended)
