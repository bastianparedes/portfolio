'use client';

import { useState } from 'react';
import Modal from '../../../Modal';

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  const yearsExperience = new Date().getFullYear() - 2020;

  return (
    <>
      <button onClick={openModal}>Ver Acerca de mí</button>
      {showContent && (
        <Modal closeModal={closeModal}>
          <div className="flex flex-col gap-5">
            <p>
              Tengo {yearsExperience} años Front-end, con una especialización en
              en la creación, depuración y optimización de aplicaciones web. Mi
              principal enfoque se centra en el uso de React (y por ende HTML,
              CSS y JavaScript) y tecnologías complementarias que se integran de
              manera efectiva. Además, garantizo una atención especial al SEO en
              todos mis proyectos y mantengo una constante actualización de mis
              conocimientos.
            </p>
            <p>
              Además de mis habilidades técnicas, cuento con competencias en
              liderazgo, toma de decisiones y una meticulosa atención al
              detalle. Mi capacidad para comunicarme en inglés es fluida, ya que
              en mi trabajo actual necesito interactuar con equipos en India que
              utilizan este idioma.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Component;
