import axios from "axios";
import React, { useEffect, useState } from "react";
import ItermLeft from "./Itemleft";

const Left = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("re-render");
  //   console.log(listProduct);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://61bc10bcd8542f0017824518.mockapi.io/product")
        .then((res) => {
          setListProduct(res.data);
          setIsLoaded(true);
        });
    };
    // console.info(Math.random())
    if (!isLoaded) getData();
  }, [isLoaded]);
  const Last = () => {
    const result = listProduct.filter(
      (product) => product.type === "trong nuoc"
    );
    
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].image} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  const Last2 = () => {
    console.log("list products", listProduct);
    const result = listProduct.filter(
      (product) => product.type === "ngoai nuoc"
    );
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].image} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  
  if (isLoaded)
    return (
      <div className="col-lg-10 col-sm-10 col-md-10">
        <div className="row">
        <h2> Trong nuoc</h2>

          <div className="col col-lg-6 col-sm-6 col-md-6"> <Last/> </div>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            {listProduct
              .filter((product) => product.type === "trong nuoc")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.image}
                    nameItem={product.description}
                    key={product.id}
                  />
                );
            })}
          </div>
        </div>
        <br />
        <div className="row">
        <h2> Ngoai nuoc</h2>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            <Last2/>
          </div>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            {listProduct
              .filter((product) => product.type === "ngoai nuoc")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.image}
                    nameItem={product.title}
                    key={product.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  else {
    return <div>Loading...</div>;
  }
};
export default Left;
