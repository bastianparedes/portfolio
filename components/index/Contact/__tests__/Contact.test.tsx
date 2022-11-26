import React from 'react';
import Contact from '..';
import { render } from '@testing-library/react';

jest.mock('../ContactLink');

describe('<Contact />', () => {
  it('should render', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
