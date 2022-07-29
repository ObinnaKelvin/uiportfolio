import React from 'react';
import "./productList.css";
import Product from "../product/Product.jsx";
import {products} from "../../data.jsx";

const ProductList = ({id,img,alt,link}) => {
	return (
		<div className="pl">
			<div className="pl-texts">
				{/*<h1 className="pl-title">Create & Inspire...</h1>*/}
				<h1 className="pl-title">Think...Create...Deliver...</h1>
{/*				<p className="pl-desc">
					Meezo is a marketplace for NFTs. 
					Simple UI for ease of use.
				</p>*/}
			</div>
			<div className="pl-list">
				{
					products.map(item => (
						<Product
							key = {item.id}
							img = {item.img}
							link = {item.link}
							alt = {item.alt}
						/>
					))
				}

			</div>			
		</div>
	)
}

export default ProductList