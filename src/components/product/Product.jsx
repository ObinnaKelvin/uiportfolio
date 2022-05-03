import "./product.css"

const Product = ({img, alt, link}) => {
	return (
		<div className="p">
			<div className="p-browser">
				<div className="p-circle"></div>
				<div className="p-circle"></div>
				<div className="p-circle"></div>				
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={img} alt={alt} className="p-img" /> {/*Images folder moved to "public" outside "src"*/}
			</a>
		</div>
	)
}

export default Product