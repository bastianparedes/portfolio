import React from 'react'
import Home from '../Home'
import { render } from '@testing-library/react'

jest.mock('react-tsparticles', () => () => <div />)

describe('<Home />', () => {
  it('should render', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
