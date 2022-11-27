import React from 'react';
import Loader from '@/components/common/Loader';
import { useLoaderContext } from '@/components/common/Loader/Context';
import Body from '@/components/common/Body';
import Main from '@/components/contact/Main';
import Form from '@/components/contact/Form';

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
