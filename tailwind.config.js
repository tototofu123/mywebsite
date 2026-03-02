/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F7F3ED',
                'cream-2': '#EDE8DF',
                ink: '#1A1714',
                'ink-2': '#3D3830',
                'ink-3': '#7A7268',
                terra: '#B8613E',
                'terra-light': '#D4825F',
                'terra-pale': '#F0E0D8',
            },
            fontFamily: {
                display: ['Cormorant', 'serif'],
                sans: ['Figtree', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
