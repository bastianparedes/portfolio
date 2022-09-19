import React from 'react'
import About from '../About'
import { render } from '@testing-library/react'

describe('<About />', () => {
  it('should render', () => {
    const { container } = render(<About />)
    expect(container).toMatchSnapshot()
  })
})
