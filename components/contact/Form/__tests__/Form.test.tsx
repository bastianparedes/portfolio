import React from 'react';
import Form from '..';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useLoaderContext } from '@/components/common/Loader/Context';

jest.mock(
  '../../ResultModal',
  () =>
    ({ setModalVisible }: { setModalVisible: (boolean: boolean) => void }) => {
      const handleOnClose = (): void => {
        setModalVisible(false);
      };
      return <button onClick={handleOnClose}>X</button>;
    }
);
jest.mock('@/components/common/Loader/Context');

describe('<Form />', () => {
  const addLoaderCounter = jest.fn();
  const substractLoaderCounter = jest.fn();

  beforeEach(() => {
    (useLoaderContext as jest.Mock).mockReturnValue({
      addLoaderCounter,
      substractLoaderCounter
    });
  });

  it('should render', () => {
    const { container } = render(<Form />);

    expect(container).toMatchSnapshot();
    expect(addLoaderCounter).toBeCalledTimes(0);
    expect(substractLoaderCounter).toBeCalledTimes(0);
  });

  it('should call api/contact and success with response.ok true', async () => {
    (global.fetch as jest.Mock) = jest.fn(
      async () => await Promise.resolve({ ok: true })
    );
    const { getByText } = render(<Form />);

    await act(() => {
      fireEvent.click(getByText('Enviar'));
    });

    expect(fetch).toBeCalledTimes(1);
    expect(addLoaderCounter).toBeCalledTimes(1);
    expect(substractLoaderCounter).toBeCalledTimes(1);
  });

  it('should call api/contact and success with response.ok false', async () => {
    (global.fetch as jest.Mock) = jest.fn(
      async () => await Promise.resolve({ ok: false })
    );
    const { getByText } = render(<Form />);
    await act(() => {
      fireEvent.click(getByText('Enviar'));
    });

    expect(fetch).toBeCalledTimes(1);
    expect(addLoaderCounter).toBeCalledTimes(1);
    expect(substractLoaderCounter).toBeCalledTimes(1);
  });

  it('should call api/contact and fail', async () => {
    global.fetch = jest.fn(async () => await Promise.reject(new Error()));
    const { getByText } = render(<Form />);
    await act(() => {
      fireEvent.click(getByText('Enviar'));
    });

    expect(fetch).toBeCalledTimes(1);
    expect(addLoaderCounter).toBeCalledTimes(1);
    expect(substractLoaderCounter).toBeCalledTimes(1);
  });

  it('should close modal after it is opened', async () => {
    (global.fetch as jest.Mock) = jest.fn(
      async () => await Promise.resolve({ ok: true })
    );
    const { getByText } = render(<Form />);
    await act(() => {
      fireEvent.click(getByText('Enviar'));
    });

    const buttonCloserModal = getByText('X');
    expect(buttonCloserModal).toBeInTheDocument();
    act(() => {
      fireEvent.click(buttonCloserModal);
    });
    expect(buttonCloserModal).not.toBeInTheDocument();

    expect(addLoaderCounter).toBeCalledTimes(1);
    expect(substractLoaderCounter).toBeCalledTimes(1);
  });
});
