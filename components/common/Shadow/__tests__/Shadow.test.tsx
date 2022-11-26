import React from 'react';
import Shadow from '..';
import { fireEvent, render } from '@testing-library/react';

describe('<CShadow />', () => {
  it('should render', () => {
    const props = {
      setVisible: jest.fn()
    };
    const { container } = render(
      <Shadow {...props}>
        <></>
      </Shadow>
    );
    expect(container).toMatchSnapshot();
  });

  it('should call setVisible when shadow is clicked', () => {
    const props = {
      setVisible: jest.fn()
    };
    const { getByTestId } = render(
      <Shadow {...props}>
        <></>
      </Shadow>
    );
    const shadow = getByTestId('data-testid-shadow');
    fireEvent.click(shadow);

    expect(props.setVisible).toBeCalledTimes(1);
    expect(props.setVisible).toBeCalledWith(false);
  });
});
