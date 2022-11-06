import React from 'react'
import Error from '..'
import { render } from '@testing-library/react'

describe('<Error />', () => {
  it('should render', () => {
    const { container } = render(<Error />)
    expect(container).toMatchSnapshot()
  })
})
