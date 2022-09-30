import React from 'react'
import Contact from '../../pages/contact'
import { fireEvent, render } from '@testing-library/react'

describe('/contact', () => {
  it('should render', () => {
    const { container } = render(<Contact />)
    expect(container).toMatchSnapshot()
  })

  it('should call api/contact and success', () => {
    ;(global.fetch as jest.Mock) = jest.fn(async () => await Promise.resolve())
    const { getByText } = render(<Contact />)
    const button = getByText('Enviar mensaje')
    fireEvent.click(button)
    expect(fetch).toBeCalledTimes(1)
  })

  it('should call api/contact and fail', () => {
    global.fetch = jest.fn(async () => await Promise.reject(new Error()))
    const { getByText } = render(<Contact />)
    const button = getByText('Enviar mensaje')
    fireEvent.click(button)
    expect(fetch).toBeCalledTimes(1)
  })
})
