module.exports = {
    mode: 'jit',
   content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    // darkMode: media, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  };
  //    purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
//    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
