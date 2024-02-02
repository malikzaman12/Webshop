const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://prod1.d11ogemmqi3sp7.amplifyapp.com',

    setupNodeEvents(on, config) {
      // implement node event listeners here
          },
  },
});
