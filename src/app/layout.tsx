import React from 'react';

import path from 'path';

import { basePath } from '../../next.config';

import 'bastianparedes/styles/global.css';
import 'bastianparedes/styles/normalize.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <link href={path.join(basePath, '/favicon.ico')} rel="icon" />
        <title>Bastián Paredes</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
