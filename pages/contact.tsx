import React from 'react';

import { Body } from 'bastianparedes/components';

import Form from '../components/contact/Form';
import Main from '../components/contact/Main';

const Contact = (): JSX.Element => {
  return (
    <>
      <Body>
        <Main>
          <Form />
        </Main>
      </Body>
    </>
  );
};

export default Contact;
