import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

class IceCreamBuilder extends Component {
    state= {
        items: {},
        scoope: [],
        totalPrice: 0
    }
    
    componentDidMount() {
        fetch('https://ice-cream-builder-11a60.firebaseio.com/items.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data
                })
            })
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
        const { items, totalPrice, scoope} = this.state
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoope} />
                <Builder 
                    items={items}
                    price={totalPrice}
                    add={this.addScope}
                    remove={this.removeScope}
                    scoope={scoope}
                />    
            </div>
        );
    }
}

export default IceCreamBuilder;