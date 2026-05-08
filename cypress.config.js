const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 120000,

  e2e: {
    baseUrl: "http://localhost:8080",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});