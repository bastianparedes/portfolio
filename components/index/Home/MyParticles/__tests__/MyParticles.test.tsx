import React from 'react'
import MyParticles from '..'
import { render } from '@testing-library/react'

describe('<MyParticles />', () => {
  it('should render', () => {
    const { container } = render(<MyParticles />)
    expect(container).toMatchSnapshot()
  })
})
