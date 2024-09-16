module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // jsdom 환경 설정
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // TypeScript와 JSX 파일 변환 설정
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
