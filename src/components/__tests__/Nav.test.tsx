import React from 'react'
import Nav from '../Nav'
import { render, screen, fireEvent } from '@testing-library/react'

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(<Nav />)
    expect(container).toMatchSnapshot()
  })

  it('should open nav and closses when link clicked', () => {
    render(<Nav />)
    const button = screen.getByTestId('data-testid-nav__button')
    const link = screen.getByText('Home')
    fireEvent.click(link)
    fireEvent.click(button)
    expect(screen).toMatchSnapshot()
  })
})
