module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/setup.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/tsconfig.json',
    },
  },
};
