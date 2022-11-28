import React from 'react';

import { render } from '@testing-library/react';

import AboutSkill from '..';

describe('<AboutSkill />', () => {
  const skill = {
    NAME: 'HTML 5',
    SRC: 'html5.png'
  };
  const props = {
    name: skill.NAME,
    src: skill.SRC
  };
  it('should render', () => {
    const { container } = render(<AboutSkill {...props} />);
    expect(container).toMatchSnapshot();
  });
});
