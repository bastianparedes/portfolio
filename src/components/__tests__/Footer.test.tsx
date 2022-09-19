import React from 'react'
import Footer from '../Footer'
import { render } from '@testing-library/react'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
