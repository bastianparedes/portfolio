import React from 'react'
import ContactLink from '..'
import { render } from '@testing-library/react'
import constants from '../../../../config/constants.json'

describe('<ContactLink />', () => {
  const props = {
    link: constants.CONTACT.LINKS.GITHUB
  }

  it('should render', () => {
    const { container } = render(<ContactLink {...props} />)
    expect(container).toMatchSnapshot()
  })
})
