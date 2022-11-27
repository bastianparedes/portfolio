import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ResultModal from '..';
import { GrStatusGood } from 'react-icons/gr';

interface ModalProps {
  setModalVisible: (boolean: boolean) => void;
  children: React.ReactNode;
}

jest.mock(
  '../../../common/Modal',
  () =>
    ({ setModalVisible, children }: ModalProps) => {
      return (
        <>
          <button onClick={() => setModalVisible(false)}>X</button>
          {children}
        </>
      );
    }
);

describe('<ResultModal />', () => {
  it('should render', () => {
    const props = {
      setModalVisible: jest.fn(),
      Icon: GrStatusGood,
      text: 'Success'
    };

    const { container } = render(<ResultModal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without props', () => {
    const props = {
      setModalVisible: jest.fn()
    };

    const { container } = render(<ResultModal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should close modal when button is clicked', () => {
    const props = {
      setModalVisible: jest.fn(),
      Icon: GrStatusGood,
      text: 'Success'
    };

    const { getByText } = render(<ResultModal {...props} />);
    const button = getByText('X');
    act(() => {
      fireEvent.click(button);
    });

    expect(props.setModalVisible).toBeCalledTimes(1);
    expect(props.setModalVisible).toBeCalledWith(false);
  });
});