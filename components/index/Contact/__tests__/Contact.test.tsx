import React from 'react';

import { render } from '@testing-library/react';

import Contact from '..';

jest.mock('../ContactLink');

describe('<Contact />', () => {
  it('should render', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
