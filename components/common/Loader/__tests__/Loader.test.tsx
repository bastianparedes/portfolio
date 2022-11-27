import React from 'react';
import { render } from '@testing-library/react';
import Loader from '..';

jest.mock(
  '../../Shadow',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <>{children}</>
);

describe('<Loader />', () => {
  it('should render', () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
