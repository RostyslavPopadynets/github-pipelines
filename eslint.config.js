
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ігноруємо артефакти збірки
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 🔒 Пробіли
      'no-trailing-spaces': 'error',              // заборонити пробіли в кінці рядка
      'no-multi-spaces': 'error',                 // заборонити зайві пробіли між токенами
      // 🔹 Крапки з комою
      'semi': ['error', 'always'],                // завжди вимагати ;
      'semi-spacing': ['error', { before: false, after: true }], // стиль відступів навколо ;
      'no-irregular-whitespace': 'error',      // ловить невидимі юнікод-пробіли
      'space-in-parens': ['error', 'never'],   // пробіли всередині ()
      'space-before-blocks': ['error', 'always'], // пробіл перед { ... }
      'comma-spacing': ['error', { before: false, after: true }],
    },
  },
])
