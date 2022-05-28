import axios from "axios";
import React, { useEffect} from "react";
import { useState } from "react";
import ItemLeft from "./ItemLeft";

const Left = () => {
    const [listProduct, setListProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // console.log(listProduct);
    useEffect(() => {
        const getData = () => {
            axios
                .get("https://61bc10bcd8542f0017824518.mockapi.io/News")
                .then((res) => {
                    setListProduct(res.data);
                    setIsLoaded(true);
                });
        };
        // console.info(Math.random())
        if (!isLoaded) getData();
    }, []);
    
    if (isLoaded)
        return (
            <div className="col-lg-10 col-sm-10 col-md-10">
                <div className="row">
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        <div className="card" style={{ width: "100%" }}>
                            <img
                                src="https://cdn.jamja.vn/blog/wp-content/uploads/2021/01/dia-diem-chup-anh-dep-dip-tet-tp-hcm-2.jpg"
                                className="card-img-top"
                                alt="img"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        {listProduct
                            .filter((product) => product.type === "trong nuoc")
                            .map((product) => {
                                console.log(product.id);
                                return (


                                    <ItemLeft
                                        image={product.image}
                                        nameItem={product.description}
                                        key={product.id}
                                    />
                                );
                            })}
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        <div className="card" style={{ width: "100%" }}>
                            <img
                                src="https://cdn.jamja.vn/blog/wp-content/uploads/2021/01/dia-diem-chup-anh-dep-dip-tet-tp-hcm-2.jpg"
                                className="card-img-top"
                                alt="img"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        {listProduct
                            .filter((product) => product.type === "ngoai nuoc")
                            .map((product) => {
                                console.log(product.id);
                                return (
                                    <div className="row ">
                                        <div className="col-lg-5 col-md-5">
                                            <img src={product.image} className="card-img-top" alt="img" />
                                        </div>
                                        <div className="col col-lg-7 col col-md-7">
                                            <p className="card-text">{product.description}</p>
                                        </div>
                                    </div>
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