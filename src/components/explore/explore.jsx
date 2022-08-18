import React, { useContext } from 'react';
import { ThemeContext } from "../../context.js";
import "./explore.css";
import construction from "../../img/construction.png"
import design from "../../img/design.png"
import development from "../../img/development.png"
import ProductList from "../productList/ProductList.jsx";
import Typical from 'react-typical'
import CarouselGroupMobile from "../carousel/CarouselGroupMobile.jsx"
import CarouselGroupDesktop from "../carousel/CarouselGroupDesktop.jsx"

const Explore = () => {
		// const theme = useContext(ThemeContext);
  // 		const darkMode = theme.state.darkMode;
	return (
		//<div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
		<div className="exp">
				<div className="exp-body-hero">
						{/*<p>
							A peek into my creative world.
						</p>*/}
				      <Typical
				        steps={['I', 1000, 'I Think...', 700, 'I Create...', 700, 'I Deliver.', 700]}
				        loop={Infinity}
				        wrapper="p"
				      />
				</div>

				<div className="exp-body-design">
							<div className="exp-body-design-highlights">
								<div className = "exp-body-design-highlights-sizing">
									<img className = "exp-body-design-highlights-icon" src={design} alt="An image of bulb"/>	
									<span className = "exp-body-design-highlights-text">Designs</span>
								</div>
							</div>
							<div className="exp-body-design-information">
									<div className="izik-body-design-boxes">
										<div className="izik-body-design-box">
										{/*<ProductList />*/}
										<CarouselGroupMobile />
										<CarouselGroupDesktop />
										</div>
									</div>
							</div>
							
				</div>

{/*				<div className="exp-body-casestudy">
							<div className="exp-body-casestudy-highlights">
								<div class = "exp-body-casestudy-highlights-sizing">
									<img class = "exp-body-casestudy-highlights-icon" src={development} alt="An image of bulb"/>	
									<span className = "exp-body-casestudy-highlights-text">Case Study</span>
								</div>
							</div>
							<div className="exp-body-casestudy-information">
									<div className="exp-body-casestudy-boxes">
										<div className="exp-body-casestudy-box">
										</div>
										<div className="exp-body-casestudy-box">
										</div>
										<div className="exp-body-casestudy-box">
										</div>
									</div>
							</div>			
				</div>*/}

				<div className="exp-body-development">
							<div className="exp-body-development-highlights">
								<div class = "exp-body-development-highlights-sizing">
									<img class = "exp-body-development-highlights-icon" src={development} alt="An image of bulb"/>	
									<span className = "exp-body-development-highlights-text">Development</span>
								</div>
							</div>
							<div className="exp-body-development-information">
									<div className="exp-body-development-boxes">
										<div className="exp-body-development-box">
										</div>
										<div className="exp-body-development-box">
										</div>
										<div className="izik-body-development-box">
										</div>
									</div>
							</div>			
				</div>
			
		</div>
	)
}

export default Explore