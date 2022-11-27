import React from 'react';

import { render } from '@testing-library/react';

import Portfolio from '..';
import { Section } from '../../Common';

jest.mock('../../Common');
jest.mock('../Project');

describe('<Portfolio />', () => {
  (Section as jest.Mock).mockImplementation(({ children }) => <>{children}</>);

  it('should render', () => {
    const { container } = render(<Portfolio />);
    expect(container).toMatchSnapshot();
  });
});
