import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

class IceCreamBuilder extends Component {
    state= {
        items: {
            vanilla: 45,
            chocolate: 44,
            lemon: 23,
            orange: 33,
            strawberry: 22
        },
        scoope: [],
        totalPrice: 0
    }
    render() {
        const {items} = this.state
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream items={items} />
                <Builder items={items} />    
            </div>
        );
    }
}

export default IceCreamBuilder;