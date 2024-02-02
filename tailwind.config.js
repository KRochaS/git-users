const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    500: '#3294F8',
                },
                baseTitle: {
                    100: '#E7EDF4',
                },
                baseSubTitle: {
                    200: '#C4D4E3',
                },
                baseText: {
                    300: '#AFC2D4',
                },
                baseSpan: {
                    800: '#7B96B2',
                },
                baseLabel: {
                    700: '#3A536B',
                },
                baseBorder: {
                    950: '#1C2F41',
                },
                baseCard: {
                    950: '#131B2E',
                },
                baseBackground: {
                    950: '#0F172A',
                },
                baseInput: {
                    950: '#040F1A',
                },
            },
            boxShadow: {
                lg: '0px 2px 28px 0px rgba(0, 0, 0, 0.20)'
            }
        },
    },
    plugins: [],
};
