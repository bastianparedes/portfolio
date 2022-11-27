import React from 'react';
import MyParticles from '..';
import { render } from '@testing-library/react';

jest.mock('react-tsparticles', () => (init: { init: () => void }) => {
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
