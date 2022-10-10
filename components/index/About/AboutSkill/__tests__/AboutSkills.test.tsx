import React from 'react'
import AboutSkill from '..'
import { render } from '@testing-library/react'
import constants from '../../../../../config/constants.json'

describe('<AboutSkill />', () => {
  const skill = constants.ABOUT.SKILLS.LIST[0]
  const props = {
    src: skill.SRC,
    name: skill.NAME
  }
  it('should render', () => {
    const { container } = render(<AboutSkill {...props} />)
    expect(container).toMatchSnapshot()
  })
})
