import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    //table para receber produtos vindo do ProductRow
    <table className="table">
      <thead>
        <tr className="thead-dark">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.children.map((itens) => {
          return <ProductRow key={itens.id}>{itens}</ProductRow>;
        })}
        {/* está retornando tudo que tem dentro de PRODUCTROW */}
      </tbody>
    </table>
  );
}

export default ProductTable;
