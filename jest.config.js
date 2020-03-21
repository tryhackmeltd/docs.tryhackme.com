const path = require('path')

const ignorePatterns = [
  '/node_modules/',
  '__fixtures__'
];

module.exports = {
  rootDir: path.resolve(__dirname),
  globals: {
    "NODE_ENV": "test"
  },
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ignorePatterns,
  coveragePathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ['/node_modules/(?!@docusaurus)'],
  setupFilesAfterEnv: ['./jestSetup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
  },
  moduleNameMapper: {
    "@docusaurus/(.*)": "<rootDir>/node_modules/@docusaurus/core/lib/client/exports/$1",
    "@theme/(.*)": "<rootDir>/node_modules/@docusaurus/core/lib/client/theme-fallback/$1",
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**/*.{js,jsx}",
    "!**/*.config.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**"
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": [
    "html",
    "json-summary",
    "text",
    "lcov"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
}