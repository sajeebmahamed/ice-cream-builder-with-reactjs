import React from 'react';
import classes from './Builder.module.css'
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';
const Builder = ({items}) => {
    return (
      <div>
        <div className={classes.builder}>
          <h3> Build your own Ice Cream </h3>
          <Items items={items} />
          <TotalPrice />
          <button type="button" className={[classes.order, "rounded"].join(' ')}>
            Add to Cart
          </button>
        </div>
        <Modal>
            hello
        </Modal>
      </div>
    );
};

export default Builder;