import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'green-10': '#092A27',
                'green-20': '#12544F',
                'green-30': '#1B7E76',
                'green-35': '#20958B',
                'green-50': '#2DD2C5',
                'green-55': '#42D7CB',
                'green-70': '#81E4DC',
                'green-90': '#D5F6F3'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins'],
            },
        },
    },

    plugins: [
        forms,
        require("daisyui"),
    ],
};
