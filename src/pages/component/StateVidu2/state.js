import React, { Component } from "react";
import products_data from "../../../data/data"
import One from "./One";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = products_data()

    }

    render() {
        return (
            <div id='products'>
                {this.state.map(value => {
                    return(<One img={value.img} name={value.name}></One>)
                })}
            </div>
        );
    }
}


export default State;