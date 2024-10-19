const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jupiter.cloud.planittesting.com/'
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 80000,
  numTestsKeptInMemory: 0,
});
