module.exports = {
    content: [
        './app/**/*.{html,erb,js,jsx,ts,tsx}', // Ensure this includes all your file types
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'), // Add this line
    ],
}
