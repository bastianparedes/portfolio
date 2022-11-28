import React from 'react';

import { render } from '@testing-library/react';

import { useLoaderContext } from '@/components/common/Loader/Context';

import Contact from '../../pages/contact';

jest.mock('@/components/common/Body');
jest.mock('@/components/contact/Main');
jest.mock('@/components/contact/Form');
jest.mock('@/components/common/Loader', () => () => (
  <div data-testid="data-testid-loader"></div>
));
jest.mock('@/components/common/Loader/Context');

describe('/contact', () => {
  beforeEach(() => {
    (useLoaderContext as jest.Mock).mockReturnValue({
      loaderCounter: 0
    });
  });

  it('should render without <Loader />', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });

  it('should render with <Loader />', () => {
    (useLoaderContext as jest.Mock).mockReturnValue({
      loaderCounter: 1
    });
    const { container, getByTestId } = render(<Contact />);
    const Loader = getByTestId('data-testid-loader');

    expect(Loader).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
