import React from 'react'
import Index from '../../pages/index'
import { render } from '@testing-library/react'

describe('<Index />', () => {
  it('should render', () => {
    const { container } = render(<Index />)
    expect(container).toMatchSnapshot()
  })
})
