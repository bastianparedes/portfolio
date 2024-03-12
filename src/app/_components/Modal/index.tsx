'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const Component = ({ children, closeModal }: Props) => {
  return (
    <div
      className="h-svh w-svw bg-gray-800/80 fixed top-0 left-0 flex justify-center items-center z-10"
      onClick={closeModal}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={closeModal}
          className="absolute text-4xl aspect-square flex justify-center items-center left-0 top-0 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <IoMdClose />
        </button>
        <div className="relative bg-slate-900 max-w-[80svw] max-h-[80svh] rounded-3xl rounded-tl-none overflow-y-auto p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Component;
