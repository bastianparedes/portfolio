import React from 'react';
import MyParticles from '..';
import { render } from '@testing-library/react';

interface typeInit {
  init: () => void;
}

jest.mock('react-tsparticles', () => (init: typeInit) => {
  init.init();
  return <></>;
});
jest.mock('tsparticles', () => ({
  loadFull: () => null
}));

describe('<MyParticles />', () => {
  it('should render', () => {
    const { container } = render(<MyParticles />);
    expect(container).toMatchSnapshot();
  });
});
