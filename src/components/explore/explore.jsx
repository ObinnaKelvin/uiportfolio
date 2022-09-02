import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ThemeContext } from "../../context.js";
import "./explore.css";
import construction from "../../img/construction.png"
import design from "../../img/design.png"
import covid from "../../img/covid.png"
import kelbox from "../../img/kelbox.png"
import risk from "../../img/riskreporter.png"
import easymarket from "../../img/easymarketcover.png"
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
											<div className="exp-body-development-box-header">COVID-19 Tracker</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={covid} alt="Covid tracker dashboard"/>
											</div>
											<div className="exp-body-development-box-description">
												This app shows the world statistics of Corona Virus cases (deaths, recovered, new).
											</div>
											<a href="https://covid19-update.vercel.app/" className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
												<div className="exp-body-development-box-button">View</div>
											</a>	
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Kelbox</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={kelbox} alt="Kelbox dashboard"/>
											</div>
											<div className="exp-body-development-box-description">
												An inventory management system that allows tracking goods across a business supply chain. 
												It optimizes the entire spectrum spanning from order placement to order delivery, mapping 
												the complete journey of a product.
											</div>
											<a href="https://kelbox.vercel.app/" className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
												<div className="exp-body-development-box-button">View</div>
											</a>											
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Easy Market</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={easymarket} alt="EasyMarket landing"/>
											</div>
											<div className="exp-body-development-box-description">
												This is Easy Market's landing page. It was Built using React JS.
											</div>
											<a href="https://easymarket.now.sh/" className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
												<div className="exp-body-development-box-button">View</div>
											</a>
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Risk Reporter</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={risk} alt="Riskreporter dashboard"/>
											</div>
											<div className="exp-body-development-box-description">
												Risk Reporter is an app used to report incidences that may pose a risk in a working environment. 
												It was built using MongoDB, Express JS, React JS, Node JS.
											</div>
											<a href="https://risk-reporter.herokuapp.com/" className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
												<div className="exp-body-development-box-button">View</div>
											</a>
										</div>
									</div>
							</div>			
				</div>
			
		</div>
	)
}

export default Explore