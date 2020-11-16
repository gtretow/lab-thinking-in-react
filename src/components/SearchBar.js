import React, { useState, useEffect } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  //search salva as informações do search input em cada ocorrencia do onChange event
  //o método handleChange pega o event object como argumento e coloca seu current value na forma de Search usando o setSearch(função)

  const [searchResult, setSearchResult] = props.children;
  //usestate para entregar resultado

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //irei logar informações escritar no input search e salva no state

  useEffect(() => {
    const results = props.children.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  }, [searchTerm]);
  
  // para que serve useEffect de verdade?
  //useEffect usa 2 argumentos. o primeiro é a funcção a ser executada quando a data for modificada e o segundo argumento é uma array das dependencias que o useEffect tem. Sempre que o valor da dependencia mudar, a função será executada

  //a dependencia está em searchTerm que a cada vez que é ativada executada o primeiro argumento do useEffext
  //o filtro é aplicado no array item que retorna uma nova array com as condições
  //in the items's list includes the searchTerm then return true otherwise return false.

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {/*   search bar */}
      <ul>
        {searchResult.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* resultado da busca  */}
    </div>
  );
}

export default SearchBar;
