import React from 'react';

import { render } from '@testing-library/react';

import ContactLink from '..';

describe('<ContactLink />', () => {
  const props = {
    link: 'https://github.com/BastianParedes'
  };

  it('should render', () => {
    const { container } = render(
      <ContactLink {...props}>
        <></>
      </ContactLink>
    );
    expect(container).toMatchSnapshot();
  });
});
