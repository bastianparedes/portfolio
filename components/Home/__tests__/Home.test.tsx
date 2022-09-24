import React from 'react'
import Home from '..'
import { render } from '@testing-library/react'

describe('<Home />', () => {
  it('should render', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
