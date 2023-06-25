import React from 'react';

const Filter = ({ value, onFilterChange }) => (
  <div>
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onFilterChange} />
  </div>
);

export default Filter;
