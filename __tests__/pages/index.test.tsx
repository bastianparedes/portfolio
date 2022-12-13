import React from 'react';

import { render } from '@testing-library/react';

import Index from '../../pages/index';

jest.mock('bastianparedes/components');
jest.mock('../../components/index/Home', () => () => <></>);
jest.mock('../../components/index/Main');

describe('/index', () => {
  it('should render', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
});
