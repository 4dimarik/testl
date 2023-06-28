import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
  ],

  theme: {
    opacity: {
      0: '0',
      75: '.75',
      40: '0.45',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    extend: {
      fontFamily: {
        sans: ['Arial', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms],
};

