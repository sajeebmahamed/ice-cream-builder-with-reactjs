import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

class IceCreamBuilder extends Component {
    state= {}
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream />
                <Builder />    
            </div>
        );
    }
}

export default IceCreamBuilder;