const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],

  theme: {
    textColor: theme => theme('colors'),

    textColor: {

      'primary': '#002945',
      'white':'#FFFFFF',
      'secondary': '#EE5F18',
      'poweredBy': '#6B7280',



    }
  },
}