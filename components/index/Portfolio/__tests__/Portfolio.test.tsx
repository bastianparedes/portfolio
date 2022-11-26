import React from 'react';
import Portfolio from '..';
import { render } from '@testing-library/react';
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
