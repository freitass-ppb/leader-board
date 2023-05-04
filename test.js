const Jasmine = require('jasmine');
const reporters = require('jasmine-reporters');
const jasmine = new Jasmine();

const junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname,
    consolidateAll: true,
    filePrefix: "test-results",
});
jasmine.env.addReporter(junitReporter);

const JasmineConsoleReporter = require('jasmine-console-reporter');
const consoleReporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    timeUnit: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: false,
    emoji: false,
    beep: false,
});
jasmine.env.addReporter(consoleReporter);

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: ['**/*[sS]pec.js'],
  // helpers: ['helpers/**/*.js'],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false,
});

console.log(`Using Jasmine version: ${jasmine.jasmine.version}`);

jasmine.execute();
