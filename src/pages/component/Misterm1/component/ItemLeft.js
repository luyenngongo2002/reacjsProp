const ItemLeft = (props) => {

    return (
        <div className="row ">
            <div className="col-lg-5 col-md-5">
                <img src={props.image} className="card-img-top" alt="img" />
            </div>
            <div className="col col-lg-7 col col-md-7">
                <p className="card-text">{props.nameItem}</p>
            </div>
        </div>
    );
};
export default ItemLeft;