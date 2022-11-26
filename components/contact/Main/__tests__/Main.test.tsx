import React from 'react';
import Main from '..';
import { render } from '@testing-library/react';

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
