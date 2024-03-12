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
      <div
        className="absolute bottom-0 md:relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="text-4xl aspect-square justify-center items-center left-0 top-0 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 absolute hidden md:flex"
        >
          <IoMdClose />
        </button>
        <div className="relative bg-slate-900 w-screen max-h-[90svh] rounded-tl-3xl rounded-tr-3xl overflow-y-auto p-10 md:rounded-3xl md:rounded-tl-none md:max-w-[80svw] md:w-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Component;
