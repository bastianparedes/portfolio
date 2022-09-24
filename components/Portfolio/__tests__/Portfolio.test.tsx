import React from 'react'
import Portfolio from '..'
import { render } from '@testing-library/react'

describe('<Portfolio />', () => {
  it('should render', () => {
    const { container } = render(<Portfolio />)
    expect(container).toMatchSnapshot()
  })
})
