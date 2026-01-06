// @ts-check
const eslint = require('@eslint/js');
const {defineConfig} = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const perfectionist = require('eslint-plugin-perfectionist');

module.exports = defineConfig([
    {
        files: ['**/*.ts'],
        plugins: {
            perfectionist,
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommended,
            tseslint.configs.stylistic,
            angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'bar71',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'bar71',
                    style: 'kebab-case',
                },
            ],
            'perfectionist/sort-objects': [
                'error',
                {
                    type: 'custom',
                    order: [
                        'selector',
                        'templateUrl',
                        'template',
                        'styleUrl',
                        'styleUrls',
                        'standalone',
                        'imports',
                        'providers',
                        'changeDetection',
                        'encapsulation',
                    ],
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [
            angular.configs.templateRecommended,
            angular.configs.templateAccessibility,
        ],
        rules: {},
    }
]);
