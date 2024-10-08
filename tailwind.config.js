/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using a class
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#le00e3',
      },
      
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      padding:{
        'crd_size':'20px'
      },
      width:{
        '84':'21rem',
        '90':'23.3rem'
            }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    // You can add other plugins here if needed
  ],
}

// w-: Applies a width to an element. For example, w-10 would apply a width of 2.5rem (40px by default).
// h-: Applies a height to an element.
// p-: Applies padding to all sides of an element.
// m-: Applies margin to all sides of an element.
// bg-: Applies a background color to an element.
// text-: Applies text color to an element.
// border-: Applies a border to an element.