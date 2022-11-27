import React from 'react';
import Modal from '..';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock(
  '../../Shadow',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <>{children}</>
);

describe('<Modal />', () => {
  it('should render', () => {
    const props = {
      setModalVisible: jest.fn()
    };

    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should close modal when button is clicked', () => {
    const props = {
      success: true,
      text: 'Success',
      setModalVisible: jest.fn()
    };

    const { getByTestId } = render(<Modal {...props} />);
    const button = getByTestId('data-testid-button-closer-modal');
    act(() => {
      fireEvent.click(button);
    });

    expect(props.setModalVisible).toBeCalledTimes(1);
    expect(props.setModalVisible).toBeCalledWith(false);
  });
});
