import React, { Component } from "react";
import Item from '../../StateVidu1/Right/Item/Item';
import data from '../../../../data/dataVIP';// gọi file

class Right extends Component {
    render() {
        var dis_products = data("products"); //cac san pham
        var dis_categories = data("categories");
        var items = []; //cac component
        for (var i = 0; i < dis_products.length; i++) {
            items[i] = <Item chiTiet={dis_products[i].detail} anh ={dis_products[i].img} tenSP={dis_products[i].name}/>
        }
        return (
            // <div id = "right-content">
            //     <h2>Products:</h2>
            //     <div id="products">
            //         {items}
            //         <div style={{clear:"both"}}/>
            //     </div>
            //     <div style={{ clear: "both" }} />
            // </div>
            <ul> Products:
                {
                    products
                        .filter(products => products.id_category=== 1)
                        .map(products => <li key={products.name}>{products.img}</li>)
                }
            </ul>
        );
    }
}
export default Right;