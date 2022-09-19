import React from 'react'
import App from '../App'
import { render } from '@testing-library/react'

jest.mock('../components/Home', () => () => <div />)
jest.mock('../components/Nav', () => () => <div />)
jest.mock('../components/About', () => () => <div />)
jest.mock('../components/Portfolio', () => () => <div />)
jest.mock('../components/Contact', () => () => <div />)
jest.mock('../components/Footer', () => () => <div />)

describe('<About />', () => {
  it('should render', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
