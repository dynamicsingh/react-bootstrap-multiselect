module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['text', 'text-summary', 'html', 'json', 'lcovonly'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupTestFrameworkScriptFile: '<rootDir>lib/__testutil__/setup.js'
};
