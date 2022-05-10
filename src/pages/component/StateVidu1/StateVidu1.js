import React, { Component } from 'react';
import Right from './Right/Right';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Right></Right>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}
export default Content;
