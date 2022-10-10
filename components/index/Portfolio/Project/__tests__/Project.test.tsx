import React from 'react'
import Project from '..'
import { render } from '@testing-library/react'
import constants from '../../../../../config/constants.json'

describe('<Project />', () => {
  const project = constants.PORTFOLIO.PROJECTS[0]
  const props = {
    name: project.NAME,
    link: project.LINK,
    image: project.IMAGE,
    github: project.GITHUB,
    description: project.DESCRIPTION,
    technologies: project.TECHNOLOGIES
  }

  it('should render right', () => {
    const { container } = render(<Project index={0} {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should render left', () => {
    const { container } = render(<Project index={1} {...props} />)
    expect(container).toMatchSnapshot()
  })
})
