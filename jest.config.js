module.exports = {
  testEnvironment: 'jest-environment-jsdom',  // 브라우저 환경 설정
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',  // babel-jest를 사용해 TypeScript 및 JSX 파일을 트랜스파일
    '^.+\\.(js|jsx)$': 'babel-jest',  // JavaScript 및 JSX 파일에 대해 babel-jest 사용
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // 추가 설정 파일
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],  // Jest가 처리할 파일 확장자들
};
