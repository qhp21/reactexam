import React, { useState } from 'react';
import FilterType from './FilterType';
import shopData from '../__fixtures__/shoplist';

const ShoppingList = () => {
  const types = [
    { name: 'Парфюмерия', type: 'perfume' },
    { name: 'Овощи', type: 'vegetables' },
    { name: 'Фрукты', type: 'fruits' },
    { name: 'Мясо', type: 'meat' },
    { name: 'Прочее', type: 'other' },
  ];

  // Инициализация данных
  const [items] = useState(shopData.items || []);
  const [selectedType, setSelectedType] = useState('other');

  // Фильтрация и сортировка данных
  const filteredItems = items
    .filter(item => item.type === selectedType)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="shopList">
      <h3>Список покупок:</h3>
      <FilterType
        types={types}
        selectedType={selectedType}
        onFilterChange={setSelectedType}
      />
      <table className="shopTable">
        <tbody>
          {filteredItems.map(({ id, name, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;