import React from 'react';
import Home from '..';
import { render } from '@testing-library/react';

interface TypewriterProps {
  onInit: (typewriter: {
    typeString: () => {
      start: () => null;
    };
  }) => void;
}

jest.mock('typewriter-effect', () => ({ onInit }: TypewriterProps) => {
  const typewriter = {
    typeString: () => ({
      start: () => null
    })
  };

  onInit(typewriter);
});
jest.mock('../MyParticles', () => () => <></>);

describe('<Home />', () => {
  it('should render', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
