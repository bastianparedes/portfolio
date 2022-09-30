import React from 'react'
import Head from 'next/head'

const App = (): JSX.Element => {
  const sendMail = (): void => {
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        subject: 'TEMA',
        text: 'TEXTO'
      })
    })
      .then((/* response */) => {
        // console.log('RESPONSE', response)
      })
      .catch((/* error */) => {
        // console.log('ERROR', error)
      })
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <button onClick={sendMail}>Enviar mensaje</button>
    </>
  )
}

export default App
