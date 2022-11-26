import React from 'react';
import NavLink from '..';
import { render, fireEvent } from '@testing-library/react';
import constants from '../../../../../config/constants.json';

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
