import React from 'react';

function ProductRow(props) {
  const { name, price, rng } = props.children;
  //removendo os itens que preciso do JSON

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{rng}</td>
    </tr>
    /* RNG é apenas para seguir linha de raciocinio */
  );
}

export default ProductRow;
