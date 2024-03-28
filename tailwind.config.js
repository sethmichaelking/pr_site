module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      "node_modules/flowbite-react/lib/esm/**/*.js",

    ],
    theme: {
        extend: {
          animation: {
            // Bounces 5 times 1s equals 5 seconds
            'bounce-short': 'bounce 1s ease-in-out 5',
            //horizontal fade
            'loop-scroll': 'loop-scroll 50s linear infinite',
            'fade': 'fadeIn 2s ease-in-out',
            
          },
          keyframes: {
            'loop-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
            },
            fadeIn: {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }     
        }
      },
      plugins: [
        // ...
        require("flowbite/plugin"),
      ],
  }