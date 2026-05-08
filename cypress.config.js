const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 120000,
  baseUrl: "https://concientizacaociber.netlify.app",

  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});