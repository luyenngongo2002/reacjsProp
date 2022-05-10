import React, { Component } from "react";
import Item from './Item/Item'
import products_data from "../../../../data/data";
class Right extends Component {
    render() {
        var rows = [];
        for (var i = 0; i < product_data().length; i++) {
            rows.push(
                <Item
                    tenSP={product_data()[i].name}
                    anh={product_data()[i].img}
                    chitiet={product_data()[i].detail}>    
                </Item>// truyền dât vô
            );
        }
        return (
            <div id="right-content">
                <h2>Product:</h2>
                <div id="products">
                    {rows}
                    <div style={{ clear: "both" }} />
                </div>
                <div style={{ clear: "both" }} />
            </div>
        )
    }
}

