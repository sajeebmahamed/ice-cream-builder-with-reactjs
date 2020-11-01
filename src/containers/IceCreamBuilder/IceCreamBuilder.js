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
    addScope = (scoop) => {
        const {scoope, items} = this.state
        const workingScoope = [...scoope]
        workingScoope.push(scoop)
        this.setState((prevState) => {
            return {
                scoope: workingScoope,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        })
    }

    removeScope = (scoop) => {
        const { scoope, items } = this.state
        const workingScoope = [...scoope]
        
        const scoopeIndex = workingScoope.findIndex((sc) => sc === scoop)

        workingScoope.splice(scoopeIndex, 1)

        this.setState((prevState) => {
            return {
                scoope: workingScoope,
                totalPrice: prevState.totalPrice - items[scoop]
            }
        })
    }

    render() {
        const {items, totalPrice} = this.state
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream/>
                <Builder items={items} price={totalPrice} add={this.addScope} remove={this.removeScope} />    
            </div>
        );
    }
}

export default IceCreamBuilder;