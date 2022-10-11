import React from 'react'
import Form from '..'
import { fireEvent, render } from '@testing-library/react'

describe('<Form />', () => {
  it('should render', () => {
    const { container } = render(<Form />)
    expect(container).toMatchSnapshot()
  })

  it('should call api/contact and success with response.ok true', () => {
    ;(global.fetch as jest.Mock) = jest.fn(
      async () => await Promise.resolve({ ok: true })
    )
    const { getByText } = render(<Form />)
    const button = getByText('Enviar')
    fireEvent.click(button)
    expect(fetch).toBeCalledTimes(1)
  })

  it('should call api/contact and success with response.ok false', () => {
    ;(global.fetch as jest.Mock) = jest.fn(
      async () => await Promise.resolve({ ok: false })
    )
    const { getByText } = render(<Form />)
    const button = getByText('Enviar')
    fireEvent.click(button)
    expect(fetch).toBeCalledTimes(1)
  })

  it('should call api/contact and fail', () => {
    global.fetch = jest.fn(async () => await Promise.reject(new Error()))
    const { getByText } = render(<Form />)
    const button = getByText('Enviar')
    fireEvent.click(button)
    expect(fetch).toBeCalledTimes(1)
  })
})
