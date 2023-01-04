import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Nav from '..';
import constants from '../../../../config/constants';

jest.mock(
  '../NavLink',
  () =>
    ({ title, closeNav }: { title: string; closeNav: () => void }) =>
      <button onClick={closeNav}>{title}</button>
);

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });

  it('should open nav and close when link clicked', async () => {
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

    await act(async () => {
      fireEvent.click(button);
    });
    expect(navIsOpened(ul)).toBe(true);

    await act(async () => {
      fireEvent.click(link);
    });
    expect(navIsOpened(ul)).toBe(false);
  });
});
