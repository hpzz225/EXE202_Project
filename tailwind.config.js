/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // adjust this path to match your project structure
    ],
    theme: {
        extend: {
            fontFamily: {
                baloo: ['"Baloo 2"', 'sans-serif'],
            },
            fontWeight: {
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
            },
        },
    },
    plugins: [],
};
