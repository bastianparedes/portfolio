import React from 'react';
import Body from '..';
import { render } from '@testing-library/react';

jest.mock('../../Footer');

describe('<Body />', () => {
  it('should render', () => {
    const { container } = render(<Body />);
    expect(container).toMatchSnapshot();
  });
});
