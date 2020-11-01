import React from 'react';
import classes from './Item.module.css';
import { countBy } from 'lodash'

const Item = ({ name, add, remove, scoope = {} }) => {
  const scoopesByCount = countBy(scoope)
  return (
    <li className={classes.item}>
      <span> {name} </span>
      {
        scoopesByCount[name] >= 0 ? <span className={classes.quantity}> {scoopesByCount[name]} </span> : null
      }
      <div class="right">
        <button
          onClick={add.bind(this, name)}
          type="button"
          className={[classes.plus, "rounded"].join(" ")}
        >
          +
        </button>
        <button
          onClick={remove.bind(this, name)}
          type="button"
          className={[classes.minus, "rounded"].join(" ")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;