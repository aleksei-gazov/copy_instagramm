module.exports = {
  locales: ['en', 'ru'], // Array with the languages that you want to use
  defaultLocale: 'ru', // Default language of your website
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./public/locales/${lang}/${ns}.json`).then(m => m.default),
  pages: {
    '*': ['common', 'sidebar', 'profile'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
}
