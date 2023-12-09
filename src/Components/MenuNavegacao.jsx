import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './MenuNavegacao.css'


const MenuNavegacao = () => {
    const location = useLocation();

    const hideMenuRoutes = ['/', '/MenuNavegacao']

    const hideMenu = hideMenuRoutes.includes(location.pathname);

    if (hideMenu) {
        return null;
      }

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Logout</a>
        </li>
        {/* Adicione outros itens do menu e seus links aqui */}
        <li>
            <Link to="/lista">Lista</Link> {/* Link para a rota da lista */}
        </li>
        <li>
          <a href="/registro">Registro</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavegacao;