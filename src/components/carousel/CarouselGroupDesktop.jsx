import React, { useRef, useEffect, useState }  from 'react';
import "./carouselGroupDesktop.css";
import {motion} from 'framer-motion';
import Product from "../product/Product.jsx";
import {desktop} from "../../data.jsx";

const CarouselGroupDesktop = ({id,img,alt,link}) => {

	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<div className="cgd">
			<div className="cgd-texts">
				<span className="text1">.</span>
				<span className="text2">Desktop</span>
			</div>

			<motion.div ref={carousel} className="cgd-carousel" whileTap={{cursor: "grabbing"}}>
				<motion.div drag="x" dragConstraints={{right:0, left: -width}} className="cgd-inner-carousel">
					{
						desktop.map(item => (
							<motion.div className="cgd-item">
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

export default CarouselGroupDesktop