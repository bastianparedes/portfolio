import React from 'react';
import Section from '..';
import { render } from '@testing-library/react';

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
