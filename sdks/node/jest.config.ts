import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
};
export default config;
