import React from 'react'
import Nav from '..'
import { render, screen, fireEvent } from '@testing-library/react'
import constants from '../../../../config/constants.json'

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(<Nav />)
    expect(container).toMatchSnapshot()
  })

  it('should open nav and closses when link clicked', () => {
    render(<Nav />)
    const button = screen.getByTestId('data-testid-nav__button')
    const link = screen.getByText(constants.NAV.BUTTONS.HOME.TITLE)
    fireEvent.click(link)
    fireEvent.click(button)
    expect(screen).toMatchSnapshot()
  })
})
