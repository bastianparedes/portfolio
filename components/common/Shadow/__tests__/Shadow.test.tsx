import React from 'react';
import Shadow from '..';
import { fireEvent, render } from '@testing-library/react';

describe('<Shadow />', () => {
  it('should render', () => {
    const props = {
      setVisible: jest.fn()
    };

    const { container } = render(<Shadow {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without props', () => {
    const { container, getByTestId } = render(<Shadow />);
    fireEvent.click(getByTestId('data-testid-shadow'));
    expect(container).toMatchSnapshot();
  });

  it('should call setVisible when shadow is clicked', () => {
    const props = {
      setVisible: jest.fn()
    };

    const { getByTestId } = render(<Shadow {...props} />);
    fireEvent.click(getByTestId('data-testid-shadow'));

    expect(props.setVisible).toBeCalledTimes(1);
    expect(props.setVisible).toBeCalledWith(false);
  });
});
