import React from 'react';

import 'bastianparedes/styles/global.css';
import 'bastianparedes/styles/normalize.css';

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
