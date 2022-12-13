import React from 'react';

import { Body } from 'bastianparedes/components';

import Home from '../components/index/Home';
import Main from '../components/index/Main';

const Index = (): JSX.Element => {
  return (
    <Body>
      <Home />
      <Main />
    </Body>
  );
};

export default Index;
