/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        washi: '#F6F1E7',
        sumi: '#191612',
        shu: '#C7392B',
        kin: '#B99757',
        nezumi: '#7A736A',
      },
      fontFamily: {
        // Swapping typefaces going forward is a one-line change: edit
        // --font-display / --font-body in src/index.css, nothing here.
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        // Body-copy sizes only (xs–lg): every text-* utility ships its own
        // line-height and wins over a plain `body { line-height }` rule, so
        // 1.6 has to live here to actually reach paragraphs/labels/buttons.
        // xl and up are left at Tailwind's defaults — those sizes are only
        // ever used for headings (which force 1.1 via !important in
        // index.css) or standalone display numerals that want tight leading.
        xs: ['0.75rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        xl: '1rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
