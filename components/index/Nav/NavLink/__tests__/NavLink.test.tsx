import React from 'react'
import NavLink from '..'
import { render, screen, fireEvent } from '@testing-library/react'
import constants from '../../../../../config/constants.json'

describe('<NavLink />', () => {
  const props = {
    link: constants.NAV.BUTTONS.HOME.ID,
    title: constants.NAV.BUTTONS.HOME.TITLE,
    onClick: jest.fn()
  }

  it('should render', () => {
    const { container } = render(<NavLink {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should open nav and closses when link clicked', () => {
    render(<NavLink {...props} />)
    screen.getByText(constants.NAV.BUTTONS.HOME.TITLE)
    fireEvent.click(screen.getByText(constants.NAV.BUTTONS.HOME.TITLE))
    expect(props.onClick).toBeCalledTimes(1)
  })
})
