import { afterEach, jest } from '@jest/globals';

jest.mock('next/legacy/image');
['ai', 'bi', 'fi', 'gr', 'vsc'].forEach((element) => {
  jest.mock('react-icons/' + element);
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
