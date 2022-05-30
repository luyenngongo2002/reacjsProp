import axios from "axios";
import React, { useEffect, useState } from "react";
const Right = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("re-render");
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://61bc10bcd8542f0017824518.mockapi.io/product")
        .then((res) => {
          setListProduct(res.data);
          setIsLoaded(true);
        });
    };
    if (!isLoaded) getData();
  }, [isLoaded]);
  return (
    <div className="col-lg-2 col-sm-2 col-md-2">
      <div className="mt-5">
        {listProduct
          .map((product) =>
            <img style={{ width: '100%', height: '100px' }} src={product.image} className="card-img-top" alt="img" />
        )}
        
      </div>
    </div>
  )
}
export default Right;