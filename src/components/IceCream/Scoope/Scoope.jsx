import React from 'react';
import classes from './/Scoope.module.css'
const Scoope = () => {
    return (
      <div>
        <div className={[classes.scoop, classes.orange].join(' ')}></div>
      </div>
    );
};

export default Scoope;