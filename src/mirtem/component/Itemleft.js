const ItermLeft = ({ image, nameItem }) => {
	return (
		<div className="row mt-4">
			
			<div className="col-lg-5 col-md-5">
				<img style={{  width: '100%', height:'120px'}} src={image} className="card-img-top" alt="img" />
			</div>
			<div className="col col-lg-7 col col-md-7">
				<p className="card-text">{nameItem}</p>
			</div>
		</div>
	);
};
export default ItermLeft;
