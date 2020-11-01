import React from 'react';
import Item from './Item/Item';

const Items = ({ items, add, remove, scoope }) => {
  const flavors = Object.keys(items);
  return (
    <div>
      <ul>
        {flavors.map((flavor) => (
          <Item name={flavor} add={add} remove={remove} scoope={scoope} />
        ))}
      </ul>
    </div>
  );
};

export default Items;