import React from 'react';
import Index from '../../pages/index';
import { render } from '@testing-library/react';

jest.mock('../../components/common/Body');
jest.mock('../../components/index/Home', () => () => <></>);
jest.mock('../../components/index/Main');

describe('/index', () => {
  it('should render', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
});
