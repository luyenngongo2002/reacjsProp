import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import products_data from '../../../data';

class GetdataState extends Component {
    constructor(props) {
        var arr = products_data();
        super(props);
        this.state = { arr };
    }
    render() {
        return (
            <div>
                {this.state.arr.map(key =>
                    <div>
                        <h2>{key.name}</h2>
                        <h2>{key.img}</h2>
                        <h2>{key.detail}</h2>
                </div>)}
            </div>
        );
    }
}

export default GetdataState;