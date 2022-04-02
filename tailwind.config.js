module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          cyan : 'hsl(180, 66%, 49%)',
          darkViolet : 'hsl(257, 27%, 26%)'
        },
        secondary : {
          red : 'hsl(0, 87%, 67%)'
        },
        neutral : {
          gray : 'hsl(0, 0%, 75%)',
          'light-gray' : '#F0F1F6',
          grayViolet: 'hsl(257, 7%, 63%)',
          vDarkBlue : 'hsl(255, 11%, 22%)',
          vDarkViolet: 'hsl(260, 8%, 14%)'
        },
        hover : {
          cyan : '#9BE3E2'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage : {
        'form-background': "url('/src/images/bg-shorten-mobile.svg')",
        'form-bg-lg' : "url('/src/images/bg-shorten-desktop.svg')",
      },
      backgroundPosition : {
        'right-7': '7rem center ',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
