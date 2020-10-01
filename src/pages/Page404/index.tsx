import React from 'react';

import './styles.css';

const Page404 = (): JSX.Element => (
  <div className="page404-container">
    <div className="page404-text">
      <h1 className="page404-text-title">Erro 404</h1>
      <h2 className="page404-text-subtitle">
        Desculpe, mas a página que você procura não foi encontrada
      </h2>
    </div>
  </div>
);

export default Page404;
