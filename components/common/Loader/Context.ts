import { useState } from 'react';

import constate from 'constate';

interface ContextLoaderPropsType {
  initialLoaderCounter?: number;
}

interface ContextLoaderReturnType {
  loaderCounter: number;
  setLoaderCounter: (number: number) => void;
  addLoaderCounter: () => void;
  substractLoaderCounter: () => void;
}

function useContext({
  initialLoaderCounter = 0
}: ContextLoaderPropsType): ContextLoaderReturnType {
  const [loaderCounter, setLoaderCounter] = useState(initialLoaderCounter);

  const addLoaderCounter = (): void =>
    setLoaderCounter((counter) => counter + 1);
  const substractLoaderCounter = (): void =>
    setLoaderCounter((counter) => counter - 1);

  return {
    addLoaderCounter,
    loaderCounter,
    setLoaderCounter,
    substractLoaderCounter
  };
}

const [LoaderProvider, useLoaderContext] = constate(useContext);
export { LoaderProvider, useLoaderContext };
