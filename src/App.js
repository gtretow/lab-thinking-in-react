import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

function App() {
  return (
    <div>
      <h1>Iron Store</h1>
      <FilterableProductTable>{data.data}</FilterableProductTable>
    </div>
  );
}

export default App;

/* porque data.data? */
