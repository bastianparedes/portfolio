import React from 'react';

import { render } from '@testing-library/react';

import Error from '..';

describe('<Error />', () => {
  it('should render', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
