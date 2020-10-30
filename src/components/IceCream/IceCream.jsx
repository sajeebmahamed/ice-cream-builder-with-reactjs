import React from 'react';
import classes from './IceCream.module.css'
import Scoope from './Scoope/Scoope';

const IceCream = () => {
    return (
      <div>
        <div class={classes.icecream}>
          <p className={classes.cone}></p>
          {/* <p>Please start adding scoops</p> */}
          <Scoope />
          <div className={classes.cherry}></div>
        </div>
      </div>
    );
};

export default IceCream;