module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
            ts: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'react-app',
        'react-app/jest'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: true
            }
        ]
    }
};
