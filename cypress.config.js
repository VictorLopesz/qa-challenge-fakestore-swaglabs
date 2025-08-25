const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('Screenshot taken:', details.path)
      });

      on('after:run', (results) => {
        console.log('Videos saved at:', results.video)
      });
    },
    baseUrl: 'https://www.saucedemo.com/',
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true
});
