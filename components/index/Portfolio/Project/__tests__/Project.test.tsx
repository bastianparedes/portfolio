import React from 'react';
import Project from '..';
import { render } from '@testing-library/react';

describe('<Project />', () => {
  const props = {
    index: 0,
    name: 'Falabella',
    link: 'https://www.falabella.com/falabella-cl/',
    image: 'falabella.png',
    github: 'https://github.com/BastianParedes/falabella',
    description:
      'A/B Tester de la plataforma. Desarrollo nuevas versiones de la página y comparo la antigua versión con la nueva para recolectar datos y así desplegar la que obtenga mejores resultados.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'TypeScript',
      'Dinamic Yield',
      'Adobe Experience Data Collection'
    ]
  };

  it('should render right', () => {
    const { container } = render(<Project {...props} index={0} />);
    expect(container).toMatchSnapshot();
  });

  it('should render left', () => {
    const { container } = render(<Project {...props} index={1} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without link', () => {
    const { container } = render(<Project {...props} link="" />);
    expect(container).toMatchSnapshot();
  });

  it('should render without github', () => {
    const { container } = render(<Project {...props} github="" />);
    expect(container).toMatchSnapshot();
  });

  it('should render without link nor github', () => {
    const { container } = render(<Project {...props} link="" github="" />);
    expect(container).toMatchSnapshot();
  });
});
