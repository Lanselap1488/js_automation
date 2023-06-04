const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  reporters: [
    "default",
    "jest-allure"
  ]
};

module.exports = config