
import React, { Component } from 'react';
class One extends Component {
    render() {
        return (
            <div  style={{ display: 'flex' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src={this.props.img} width={300} height={300} />
                    <p>{this.props.name}</p>
                </div>             
            </div>
        );
    }
}
export default One;