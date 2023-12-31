import React from 'react';

import 'bastianparedes/styles/global.css';
import 'bastianparedes/styles/normalize.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <link href="/favicon.ico" rel="icon" />
        <title>Bastián Paredes</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
