import React from 'react';
import ContactLink from '..';
import { render } from '@testing-library/react';

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
