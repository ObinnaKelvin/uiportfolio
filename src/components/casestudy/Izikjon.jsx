import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./izikjon.css";
import Izik from "../../img/Izik1.png"
import bulb from "../../img/lightbulb.png";
import bulbwhite from "../../img/lightbulb1.png";
import solution from "../../img/solution.png"
import problem from "../../img/problem.png"

const Izikjon = () => {
	return (
		<div className="izik">
			{/*<div className="izik-body">*/}
				<div className="izik-body-hero">
					<div className="izik-body-hero-left">
						<h1>Izikjon</h1>
						<br/><br/>
						<p>
							Designing a secure commerce mobile app for trading Bitcoins, Gift Cards, and Payment of bills.
						</p>
					</div>
					<div className="izik-body-hero-right">
						<div className="izik-body-hero-image">
							<img className="izik-body-hero-image-image" src={Izik}/>
						</div>
					</div>
				</div>
				<div className="izik-body-timeline">
						<div className="izik-timeline-details">
							<div className="izik-timeline-detail">
								<p className="izik-timeline-detail-header">TIMELINE</p>
								<p className="izik-timeline-detail-detail">1<span>½</span> Month</p>
								{/*<p className="hero-detail-detail">Jan - Feb 2022</p>*/}
							</div>
							<div className="izik-timeline-detail">
								<p className="izik-timeline-detail-header">PLATFORM</p>
								<p className="izik-timeline-detail-detail">Responsive Website</p>
							</div>
							<div className="izik-timeline-detail">
								<p className="izik-timeline-detail-header">MY ROLE</p>
								<p className="izik-timeline-detail-detail">Product Designer</p>
							</div>
						</div>
						<p>
							<strong>Disclaimer:</strong> Due to non-disclosure agreements with Izikjon, I am limited in the amount of work I can show as most of the designs contain
										sensitive information exclusive to Izikjon.
						</p>
				</div>
				<div className="izik-body-problem">
							<div className="izik-body-problem-highlights">
								<div class = "izik-body-problem-highlights-sizing">
									<img class = "izik-body-problem-highlights-icon" src={bulb} alt="An image of bulb"/>	
									PROBLEM
								</div>
							</div>
							<div className="izik-body-problem-information">
								<div className="izik-body-problem-text">
									<p>
									<br/>
										In day-to-day client conversations, Izikjon's users wanted one-stop shop where they could pay bills and buy services. Many were skeptical about trusting online services and were scared that they could be whipped off their hard-earned money.
										It's very time-consuming to sift through all of the gift card data, so the traders needed a way to reduce the repetitiveness of many of their tasks.
									</p>{/*<br/>*/}									
								</div>
								<div className="izik-body-problem-image">
									<img className="izik-body-problem-image-image" src={problem} alt="problem"/>
								</div>
							</div>
							
				</div>
				<div className="izik-body-solution">
							<div className="izik-body-solution-highlights">
								<div class = "izik-body-solution-highlights-sizing">
									<img class = "izik-body-solution-highlights-icon" src={bulbwhite} alt="An image of bulb"/>	
									SOLUTION
								</div>
							</div>
							<div className="izik-body-solution-information">
								<div className="izik-body-solution-text">
									<br/>
									<p>
										Present a secure real-time mobile application, that addresses the needs of it's users. 
									<br/><br/>
										My task was to design high-definition interfaces to break down complex usecases into simple and digestable UIs.
									<br/><br/>
										Being entirely responsible for the front-end of the app, I worked to gather feedback every step of the way.
									</p>{/*<br/>*/}									
								</div>
								<div className="izik-body-solution-image">
									<img className="izik-body-solution-image-image" src={solution} alt="solution"/>
								</div>
							</div>
							
				</div>

				<div className="izik-body-process">
							<div className="izik-body-process-highlights">
								<div class = "izik-body-process-highlights-sizing">
									<img class = "izik-body-process-highlights-icon" src={bulb} alt="An image of bulb"/>	
									PROCESS
								</div>
							</div>
							<div className="izik-body-process-information">
								<div className="izik-body-process-text">
									<p>
									<br/>
										This required three phases:
									<br/>
									</p>{/*<br/>*/}
									<div className="izik-body-process-text-boxes">
										<div className="izik-body-process-text-box">Performing behaviorial interviews with each of the traders to understand behavior and pain points, as well as mapping out their journey from start to making a transactions.</div>
										<div className="izik-body-process-text-box">Rapidly prototype different solutions to present to users.</div>
										<div className="izik-body-process-text-box">Develop mobile-application by consolidating data points, taking feedback every step of the way.</div>
									</div>										
								</div>
							</div>
				</div>

				<div className="izik-body-research">
							<div className="izik-body-research-highlights">
								<div class = "izik-body-research-highlights-sizing">
									<img class = "izik-body-research-highlights-icon" src={bulb} alt="An image of bulb"/>	
									USER RESEARCH
								</div>
							</div>
							<div className="izik-body-research-information">
								<div className="izik-body-research-text">
									<p>
									<br/>
										Here are some of the main point of concern I discovered that traders faced.
									</p>{/*<br/>*/}	
									<div className="izik-body-research-text-boxes">
										<div className="izik-body-research-text-box">It's difficult to find reliable gift card stores.</div>
										<div className="izik-body-research-text-box">Clients needed an app interface that is easy to use.</div>
										<div className="izik-body-research-text-box">Easy fast payment of bills.</div>
										<div className="izik-body-research-text-box">Secure platform for trading Bitcoins.</div>
									</div>								
								</div>
							</div>
				</div>


				<div className="izik-body-outcome">
							<div className="izik-body-outcome-highlights">
								<div class = "izik-body-outcome-highlights-sizing">
									<img class = "izik-body-outcome-highlights-icon" src={bulb} alt="An image of bulb"/>	
									OUTCOME
								</div>
							</div>
							<div className="izik-body-outcome-information">
								<div className="izik-body-outcome-text">
									<p>
									<br/>
										A real-time secure mobile application to handle gift card sales, Bitcoins trading and bill payment transactions.
									<br/>
									<br/>
										Due to non-disclosure agreements with Izikjon, I am limited in the amount of work I can show as most of the designs contain
										sensitive information exclusive to Izikjon.
									<br/>
									<br/>
										If you would like more information, feel free to write me via email at <strong>obinnaokere11@gmail.com</strong>.
									</p>{/*<br/>*/}	
{/*									<div className="izik-body-outcome-text-boxes">
										<div className="izik-body-outcome-text-box">It's difficult to find reliable gift card stores.</div>
										<div className="izik-body-outcome-text-box">It's difficult to find reliable gift card stores.</div>
										<div className="izik-body-outcome-text-box">It's difficult to find reliable gift card stores.</div>
										<div className="izik-body-outcome-text-box">It's difficult to find reliable gift card stores.</div>
									</div>	*/}							
								</div>
							</div>
				</div>
				<div className="izik-body-footer-nav">
							<div className="izik-body-footer-nav-left">
							</div>
							<div className="izik-body-footer-nav-right">
								<p>
									NEXT: <span className="izik-body-footer-nav-right-text">SLIIKE</span>
									<br/>
								</p>
								<p>
									{/*<span className="izik-body-footer-nav-right-text-sub">View Case Study</span>*/}
									<Link to="/casestudy/sliike" className="izik-body-footer-nav-right-text-sub"> View Case Study </Link>
									<br/>
								</p>
							</div>
				</div>
{/*				<div className="proj-body-item">
					<div className="proj-body-item-left">
						<h2>Izikjon</h2>
						<hr className="line"/>
						<br/>
						<p>
							Designing a secure e-commerce experience to trade gift cards, pay utility bills etc.
						</p>
						<div className="proj-body-item-tag-holder">
							<div className="proj-body-item-tags">Product Design</div>
							<div className="proj-body-item-tags">Front-End</div>
							<div className="proj-body-item-tags">Mobile App</div>
						</div>
						<div className="proj-body-item-tag-link">
							<Link to="/404" className="proj-body-item-tag-link-text"> View Case Study </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" src={izikjonCover}/>
						</div>
					</div>
				</div>*/}
{/*				<div className="proj-body-item">
					<div className="proj-body-item-left">
						<h2>Meezo</h2>
						<hr className="line"/>
						<br/>
						<p>
							Designing a mobile app marketplace for NFTs.
						</p>
						<div className="proj-body-item-tag-holder">
							<div className="proj-body-item-tags">Product Design</div>
							<div className="proj-body-item-tags">Front-End</div>
							<div className="proj-body-item-tags">Mobile App</div>
						</div>
						<div className="proj-body-item-tag-link">
							<Link to="/casestudy" className="proj-body-item-tag-link-text"> View Design </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" src={meezoCover}/>
						</div>
					</div>
				</div>*/}
			{/*</div> */}
		</div>	
	)
}

export default Izikjon