module.exports = {
   purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            sans: ["Roboto"],
         },
         colors: {
            "custom-gray": "#212121",
            "custom-white": "#F7F7F6",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
