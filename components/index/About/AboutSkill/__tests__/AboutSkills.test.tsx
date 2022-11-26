import React from 'react';
import AboutSkill from '..';
import { render } from '@testing-library/react';

describe('<AboutSkill />', () => {
  const skill = {
    SRC: 'html5.png',
    NAME: 'HTML 5'
  };
  const props = {
    src: skill.SRC,
    name: skill.NAME
  };
  it('should render', () => {
    const { container } = render(<AboutSkill {...props} />);
    expect(container).toMatchSnapshot();
  });
});
