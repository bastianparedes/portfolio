import React from 'react';
import Nav from '..';
import { render, fireEvent } from '@testing-library/react';
import constants from '../../../../config/constants.json';
import { act } from 'react-dom/test-utils';

interface NavLinkProps {
  title: string;
  closeNav: () => void;
}

jest.mock('../NavLink', () => ({ title, closeNav }: NavLinkProps) => (
  <button onClick={closeNav}>{title}</button>
));

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });

  it('should open nav and close when link clicked', () => {
    const navIsOpened = (ul: HTMLElement): boolean => {
      return Boolean(
        [...ul.classList].find((className) =>
          className.includes('linksContainerOpened')
        )
      );
    };

    const { getByTestId, getByText } = render(<Nav />);

    const button = getByTestId('data-testid-nav__button');
    const ul = getByTestId('data-testid-nav__ul');
    const link = getByText(constants.NAV.BUTTONS.HOME.TITLE);

    expect(navIsOpened(ul)).toBe(false);

    act(() => {
      fireEvent.click(button);
    });
    expect(navIsOpened(ul)).toBe(true);

    act(() => {
      fireEvent.click(link);
    });
    expect(navIsOpened(ul)).toBe(false);
  });
});
