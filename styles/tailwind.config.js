module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safeList: [],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '2.5rem',
      screens: {
        'md': '1024px',
        'lg': '1280px',
        'xl': '1536px',
      },
    },
    screens: {
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
    extend: {
      backgroundSize: {
        'h-6': 'auto 1.5rem',
        'w-8': '2rem auto',
      },
      colors: {
        brand: {
          grey: '#E5E7EB',
          'light-grey': '#F3F4F6',
          'dark-grey': '#D4D4D4',
          'darker-grey': '#A3A3A3',
          'darkest-grey': '#78716C',
          'blue': '#0284C7',
        },
      },
      maxWidth: theme => theme('spacing'),
      spacing: {
        '49ch': '49ch',
        '60ch': '60ch',
        '70ch': '70ch',
      },
    },
  },
  variants: {},
  plugins: [],
};
