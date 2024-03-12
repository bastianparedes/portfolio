'use client';

import { useState } from 'react';
import Modal from '../../../Modal';
import { useTranslationContext } from '../../../../_contexts/translation';

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const { translation } = useTranslationContext();
  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  const yearsExperience = new Date().getFullYear() - 2020;

  return (
    <>
      <button onClick={openModal}>{translation.about.button}</button>
      {showContent && (
        <Modal closeModal={closeModal}>
          <div className="flex flex-col gap-5">
            <p>
              {translation.about.paragraph_1.part_1} {yearsExperience}{' '}
              {translation.about.paragraph_1.part_2}
            </p>
            <p>{translation.about.paragraph_2}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Component;
