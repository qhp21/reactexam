import React from 'react';

const FilterType = ({ types, selectedType, onFilterChange }) => (
  <div className="controls">
    <select
      name="itemtype"
      id="itemtype"
      value={selectedType}
      onChange={e => onFilterChange(e.target.value)}
    >
      {types.map(({ name, type }) => (
        <option key={type} value={type}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export default FilterType;