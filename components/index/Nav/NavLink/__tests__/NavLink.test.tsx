import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import NavLink from '..';
import constants from '../../../../../config/constants';

describe('<NavLink />', () => {
  const props = {
    link: constants.NAV.BUTTONS.HOME.ID,
    title: constants.NAV.BUTTONS.HOME.TITLE,
    closeNav: jest.fn()
  };

  it('should render', () => {
    const { container } = render(<NavLink {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should open nav and closses when link clicked', () => {
    const { getByText } = render(<NavLink {...props} />);
    fireEvent.click(getByText(constants.NAV.BUTTONS.HOME.TITLE));
    expect(props.closeNav).toBeCalledTimes(1);
  });
});
