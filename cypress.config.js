const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'tvopyw',
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/result-[hash].xml',
  },
  video: false,
  defaultCommandTimeout: 200000,
  pageLoadTimeout: 100000,
  requestTimeout: 200000,
  responseTimeout: 80000,
  SupportFile: 'cypress/support/index.js',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://stage-keystone.historicengland.org.uk/',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
