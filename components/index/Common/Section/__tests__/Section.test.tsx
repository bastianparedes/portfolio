import React from 'react';

import { render } from '@testing-library/react';

import Section from '..';

describe('<Section />', () => {
  const props = {
    id: 'data-testid',
    title: 'test-title'
  };
  it('should render', () => {
    const { container } = render(<Section {...props} />);
    expect(container).toMatchSnapshot();
  });
});
