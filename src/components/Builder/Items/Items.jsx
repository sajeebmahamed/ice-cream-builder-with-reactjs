import React from 'react';
import Item from './Item/Item';

const Items = ({items}) => {
    const flavors = Object.keys(items)
    return (
      <div>
        <ul>
          {flavors.map((flavor) => (
            <Item name={flavor} />
          ))}
        </ul>
      </div>
    );
};

export default Items;