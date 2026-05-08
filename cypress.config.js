const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 120000,

  e2e: {
    baseUrl: "https://concientizacaociber.netlify.app",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});