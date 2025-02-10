import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser }
    },

    pluginJs.configs.recommended,
    {
        plugins: {
            unicorn: eslintPluginUnicorn
        },
        name: 'best practices rules',
        files: ['**/*.js'],
        rules: {
            ...pluginJs.configs.recommended.rules,
            semi: ['error', 'always'],
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'max-len': [
                'warn',
                {
                    code: 140,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true
                }
            ],
            'brace-style': ['warn'],
            'comma-dangle': ['error', 'never'],
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'no-trailing-spaces': ['error', { skipBlankLines: false }],
            'eol-last': ['error', 'always'],
            'no-var': ['error'],
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase'
                }
            ]
        }
    }
];