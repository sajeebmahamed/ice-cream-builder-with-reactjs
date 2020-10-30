import React from 'react';
import classes from './Modal.module.css';
const Modal = ({children}) => {
    return (
      <div>
        <div class={classes.backdrop} onclick="removeModal()"></div>
        <div class={classes.modalBody}></div>
      </div>
    );
};

export default Modal;