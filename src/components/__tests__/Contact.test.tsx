import React from 'react'
import Contact from '../Contact'
import { render } from '@testing-library/react'

describe('<Contact />', () => {
  it('should render', () => {
    const { container } = render(<Contact />)
    expect(container).toMatchSnapshot()
  })
})
