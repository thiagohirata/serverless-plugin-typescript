module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageDirectory: '.coverage',
	collectCoverage: true,
	coverageReporters: ['lcov'],
	collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
	testPathIgnorePatterns: ['__tests__/__fixtures__/'],
};
