const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  reporters: ['default', 'jest-allure'],
  runner: 'jest-runner',
  rootDir: './',
  testEnvironment: 'node',
  testTimeout: 70000,
};

module.exports = config;
