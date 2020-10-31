import React from 'react';
import classes from './/Scoope.module.css'
const Scoope = ({ scoope }) => {
  return <div className={[classes.scoop, classes[scoope]].join(" ")} />;
};

export default Scoope;