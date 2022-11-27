import React from 'react';

import { render } from '@testing-library/react';

import About from '..';
import { Section } from '../../Common';

jest.mock('../../Common');
jest.mock('../AboutSkill');

describe('<About />', () => {
  (Section as jest.Mock).mockImplementation(({ children }) => <>{children}</>);
  it('should render', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
