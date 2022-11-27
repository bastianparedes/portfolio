import React from 'react';

import { render } from '@testing-library/react';

import Home from '..';

jest.mock(
  'typewriter-effect',
  () =>
    ({
      onInit
    }: {
      onInit: (typewriter: {
        typeString: () => {
          start: () => null;
        };
      }) => void;
    }) => {
      const typewriter = {
        typeString: () => ({
          start: () => null
        })
      };

      onInit(typewriter);
    }
);
jest.mock('../MyParticles', () => () => <></>);

describe('<Home />', () => {
  it('should render', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
