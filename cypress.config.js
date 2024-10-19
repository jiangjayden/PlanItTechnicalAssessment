const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jupiter.cloud.planittesting.com/',
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false, // Upload video pass and fail
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true, // Enable screenshots on failure
    screenshotsFolder: 'cypress/screenshots',
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
});
