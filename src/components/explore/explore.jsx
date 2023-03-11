import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ThemeContext } from "../../context.js";
import "./explore.css";
// import construction from "../../img/construction.png"
import design from "../../img/design.png"
import covid from "../../img/covid.png"
import kelbox from "../../img/kelbox.png"
// import risk from "../../img/riskreporter.png"
import easymarket from "../../img/easymarketcover.png"
import development from "../../img/development.png"
import ProductList from "../productList/ProductList.jsx";
import Typical from 'react-typical'
import CarouselGroupMobile from "../carousel/CarouselGroupMobile.jsx"
import CarouselGroupDesktop from "../carousel/CarouselGroupDesktop.jsx"
import craave from '../../img/Craave2.PNG'
import traka from '../../img/traka1.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Explore = () => {
		// const theme = useContext(ThemeContext);
  // 		const darkMode = theme.state.darkMode;
  	const [trakaCt, setTrakaCt] = useState(24);	
	const [craaveCt, setCraaveCt] = useState(476);
	const [covidCt, setCovidCt] = useState(476);
	const [kelboxCt, setKelboxCt] = useState(474);
	const [easyCt, setEasyCt] = useState(325);

	const handleTraka = () => {
		setCraaveCt(trakaCt+1);
	}

	const handleCraave = () => {
		setCraaveCt(craaveCt+1);
	}
	const handleCovid = () => {
		setCovidCt(covidCt+1);
	}
	const handleEasy = () => {
		setEasyCt(easyCt+1);
	}
	const handleKelbox = () => {
		setKelboxCt(kelboxCt+1);
	}
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
											<div className="exp-body-development-box-header">Traka</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={traka} alt="Traka - An incidence reporting application"/>
											</div>
											<div className="exp-body-development-box-description-holder">
												<div className="exp-body-development-box-description">
												An incidence reporting application that enables enterprise application support users log incidences, 
												bugs and fixes for software engineers to track and resolve.
												</div>
												<a href="https://traka.vercel.app/" onClick={handleTraka} className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
													<div className="exp-body-development-box-button">
														<span className="exp-body-development-box-button-item">View</span>
													</div>
												</a>
												<div className="exp-body-development-box-views">
													<span>{trakaCt}</span>
													<span><FontAwesomeIcon icon={faEye}/></span>
												</div>												
											</div>
	
										</div>

										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Craave</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={craave} alt="Craave - A Modern hotel booking application"/>
											</div>
											<div className="exp-body-development-box-description-holder">
												<div className="exp-body-development-box-description">
														A Modern hotel booking application.
												</div>
												<a href="https://craave.vercel.app/" onClick={handleCraave} className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
													<div className="exp-body-development-box-button">
														<span className="exp-body-development-box-button-item">View</span>
													</div>
												</a>
												<div className="exp-body-development-box-views">
													<span>{craaveCt}</span>
													<span><FontAwesomeIcon icon={faEye}/></span>
												</div>												
											</div>
	
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">COVID-19 Tracker</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={covid} alt="Covid tracker dashboard"/>
											</div>
											<div className="exp-body-development-box-description-holder">
												<div className="exp-body-development-box-description">
													This app shows the world statistics of Corona Virus cases (deaths, recovered, new).
												</div>
												<a href="https://covid19-update.vercel.app/" onClick={handleCovid} className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
													<div className="exp-body-development-box-button">View</div>
												</a>
												<div className="exp-body-development-box-views">
													<span>{covidCt}</span>
													<span><FontAwesomeIcon icon={faEye}/></span>
												</div>
											</div>	
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Kelbox</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={kelbox} alt="Kelbox dashboard"/>
											</div>
											<div className="exp-body-development-box-description-holder">
												<div className="exp-body-development-box-description">
													An inventory management system that allows tracking goods across a business supply chain. 
													It optimizes the entire spectrum spanning from order placement to order delivery, mapping 
													the complete journey of a product.
												</div>
												<a href="https://kelbox.vercel.app/" onClick={handleKelbox} className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
													<div className="exp-body-development-box-button">View</div>
												</a>
												<div className="exp-body-development-box-views">
													<span>{kelboxCt}</span>
													<span><FontAwesomeIcon icon={faEye}/></span>
												</div>	
											</div>										
										</div>
										<div className="exp-body-development-box">
											<div className="exp-body-development-box-header">Easy Market</div>
											<div className="exp-body-development-box-image">
												<img className = "exp-body-development-box-image-image" src={easymarket} alt="EasyMarket landing"/>
											</div>
											<div className="exp-body-development-box-description-holder">
												<div className="exp-body-development-box-description">
													This is Easy Market's landing page. It was Built using React JS.
												</div>
												<a href="https://easymarket.now.sh/" onClick={handleEasy} className="exp-body-development-box-button-text" target="_blank" rel="noreferrer">
													<div className="exp-body-development-box-button">View</div>
												</a>
												<div className="exp-body-development-box-views">
													<span>{easyCt}</span>
													<span><FontAwesomeIcon icon={faEye}/></span>
												</div>
											</div>
										</div>
										{/* <div className="exp-body-development-box">
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
										</div> */}
									</div>
							</div>			
				</div>
			
		</div>
	)
}

export default Explore