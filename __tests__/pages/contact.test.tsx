import React from 'react'
import Contact from '../../pages/contact'
import { render } from '@testing-library/react'

describe('/contact', () => {
  it('should render', () => {
    const { container } = render(<Contact />)
    expect(container).toMatchSnapshot()
  })
})
