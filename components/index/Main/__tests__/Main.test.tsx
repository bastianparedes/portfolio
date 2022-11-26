import React from 'react';
import Main from '..';
import { render } from '@testing-library/react';

jest.mock('../../Nav');
jest.mock('../../About');
jest.mock('../../Portfolio');
jest.mock('../../Contact');

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
