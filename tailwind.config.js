module.exports = {
  mode: 'jit',
  content: [
    "./**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-preset-env',
  ],
}
