const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin') //need plugin for downloadfile()

module.exports = defineConfig({
  e2e: {
     watchForFileChanges: false,
     defaultCommandTimeout: 5000,
    viewportWidth: 1024,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile}) //function added for downloadFile()
    },
  },
});
