import React from 'react';
import classes from './IceCream.module.css'
import Scoope from './Scoope/Scoope';

const IceCream = ({ scoops }) => {
  // const flavors = Object.keys(items)
  return (
    <div>
      <div class={classes.icecream}>
        <p className={classes.cone}></p>
        {/* <p>Please start adding scoops</p> */}
        {scoops.map((scoope) => (
          <Scoope key={`${scoope}${Math.random()}`} scoope={scoope} />
        ))}
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};

export default IceCream;