const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jupiter.cloud.planittesting.com/'
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
});
