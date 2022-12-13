import React from 'react';

import Body from '../components/common/Body';
import Loader from '../components/common/Loader';
import { useLoaderContext } from '../components/common/Loader/Context';
import Form from '../components/contact/Form';
import Main from '../components/contact/Main';

const Contact = (): JSX.Element => {
  const { loaderCounter } = useLoaderContext();
  const showLoader = loaderCounter > 0;
  return (
    <>
      {showLoader && <Loader />}
      <Body>
        <Main>
          <Form />
        </Main>
      </Body>
    </>
  );
};

export default Contact;
