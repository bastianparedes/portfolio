import React from 'react';
import Contact from '../../pages/contact';
import { render } from '@testing-library/react';

jest.mock('../../components/common/Body');
jest.mock('../../components/contact/Main');
jest.mock('../../components/contact/Form');

describe('/contact', () => {
  it('should render', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
