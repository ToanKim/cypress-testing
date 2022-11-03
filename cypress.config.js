const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zpznb5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  defaultCommandTimeout: 500,
});
