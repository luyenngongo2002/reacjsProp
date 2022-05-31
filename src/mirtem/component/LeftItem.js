import axios from "axios";
import React, { useEffect, useState } from "react";
import ItermLeft from "./Itemleft";

const Left = () => {
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
  
  const LastNews = () => {
    const result = listProduct.filter(
      (product) => product.type === "chinh tri"
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
  const LastNewTaiChinh = () => {
    const result = listProduct.filter(
      (product) => product.type === "tai chinh-kinh doanh"
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
      <div className="col-lg-10 col-sm-10 col-md-10 ">
        <div className="row ">
          <h2> Chính trị</h2>
          <b className="ml-5">Chính Sách Phát Triển / Ngân Hàng / Chứng Khoán / Tiêu Dùng / Doanh Nghiệp / Doanh Nhân / Địa Ốc / Làm Giàu</b>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            <LastNews />
          </div>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            
            {listProduct
              .filter((product) => product.type === "chinh tri")
              .map((product) => {
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
          <h2> Tài chính - Kinh doanh </h2>
          <b>Chính Sách Phát Triển / Ngân Hàng / Chứng Khoán / Tiêu Dùng / Doanh Nghiệp / Doanh Nhân / Địa Ốc / Làm Giàu</b>
            <div className="col col-lg-6 col-sm-6 col-md-6">
              <LastNewTaiChinh/>
            </div>
            <div className="col col-lg-6 col-sm-6 col-md-6">
              {listProduct
                .filter((product) => product.type === "tai chinh-kinh doanh")
                .map((product) => {
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
