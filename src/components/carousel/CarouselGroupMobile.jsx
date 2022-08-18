import React, { useRef, useEffect, useState }  from 'react';
import "./carouselGroupMobile.css";
import {motion} from 'framer-motion';
import Product from "../product/Product.jsx";
import {mobile} from "../../data.jsx";

const CarouselGroupMobile = ({id,img,alt,link}) => {

	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div className="cgm">
			<div className="cgm-texts">
				<span className="text1">.</span>
				<span className="text2">Mobile</span>
			</div>

			<motion.div ref={carousel} className="cgm-carousel" whileTap={{cursor: "grabbing"}}>
				<motion.div drag="x" dragConstraints={{right:0, left: -width}} className="cgm-inner-carousel">
					{
						mobile.map(item => (
							<motion.div className="cgm-item">
								<img src={item.img} alt={item.alt} key = {item.id}/>
							</motion.div>
						))
					}
				</motion.div>					
			</motion.div>

			<br/><br/>
					
		</div>
	)
}

export default CarouselGroupMobile