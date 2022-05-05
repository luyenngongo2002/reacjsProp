import React, { Component } from 'react';

function Numberone(props) {
    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img src={props.linkanh} height="200px" width="200px" class="img-responsive" alt="Image" />
          <p>{props.tieude}</p>
          <p>Giá sản phẩm: 400k</p>
        </div>
      </div>)};

  export default Numberone;
