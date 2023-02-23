import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ou84tn",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output-[hash].xml',
      overwrite: false,
      toConsole: true,
    }
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   charts: true,
    //   overwrite: false,
    //   json: true,
    //   html: true,
    //   reportDir: "cypress/reports"
 // }
});
