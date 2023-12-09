import React, { useState, useEffect } from "react";


const Listagem = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if(userData) {
            setItems([userData]);
        }
    }, [])

    return (
        <div>
          <h2>Lista de Itens</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>Nome:</strong> {item.name}, <strong>Email:</strong> {item.email}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Listagem;