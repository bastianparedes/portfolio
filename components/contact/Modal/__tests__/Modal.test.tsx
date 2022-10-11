import React from 'react'
import Modal from '..'
import { render } from '@testing-library/react'

describe('<Modal />', () => {
  it('should render', () => {
    const props = {
      success: true,
      text: 'Success'
    }
    const { container } = render(<Modal {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should render', () => {
    const props = {
      success: false,
      text: 'Success'
    }
    const { container } = render(<Modal {...props} />)
    expect(container).toMatchSnapshot()
  })
})
