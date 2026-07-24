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
        display: ['"Shippori Mincho"', 'serif'],
        body: ['"Zen Kaku Gothic New"', 'sans-serif'],
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
