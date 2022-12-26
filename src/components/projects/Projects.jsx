import React from 'react'
import {Link} from 'react-router-dom';
import "./projects.css";
import viraCover from "../../img/ViraArt.png"
import meezoCover from "../../img/MeezoArt.png"
import sliike from "../../img/hero.png"
import izikjonCover from "../../img/IzikjonArt1.png"
import Craave from "../../img/Craave1.PNG"

function Projects() {
	return (
		<div className="proj">
			{/*<div className="p-header">*/}
				{/*<div className="p-header-bar"></div>*/}
				<div className="proj-header-text">FEATURED PROJECTS</div>
			{/*</div>*/}
			<div className="proj-body">
			<div className="proj-body-item">
					<div className="proj-body-item-left">
						<h2>Craave</h2>
						<hr className="line"/>
						<br/>
						<p>
						A modern hotel booking application showcasing available hotels across the world.
						</p>
						<div className="proj-body-item-tag-holder">
							<div className="proj-body-item-tags">React js</div>
							<div className="proj-body-item-tags">REST API</div>
							<div className="proj-body-item-tags">Mongo DB</div>
							<div className="proj-body-item-tags">Node Js</div>
							<div className="proj-body-item-tags">ContextAPI</div>
						</div>
						<div className="proj-body-item-tag-link">
							<Link to="/explore" className="proj-body-item-tag-link-text">View Project</Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" loading="lazy" src={Craave} alt="Craave"/>
						</div>
					</div>
				</div>
				<div className="proj-body-item">
					<div className="proj-body-item-left">
						<h2>Vira</h2>
						<hr className="line"/>
						<br/>
						<p>
							Designing a Virtual Reality mobile app to watch movies during relaxation.
						</p>
						<div className="proj-body-item-tag-holder">
							<div className="proj-body-item-tags">Product Design</div>
							<div className="proj-body-item-tags">Front-End</div>
							<div className="proj-body-item-tags">Mobile App</div>
						</div>
						<div className="proj-body-item-tag-link">
							<Link to="/explore" className="proj-body-item-tag-link-text"> View Design </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" loading="lazy" src={viraCover} alt="Vira"/>
						</div>
					</div>
				</div>
				<div className="proj-body-item">
					<div className="proj-body-item-left">
						<h2>Sliike</h2>
						<hr className="line"/>
						<br/>
						<p>
							Revamping Sliike's landing page and user dashboards for both mobile and desktop screen resolutions.
						</p>
						<div className="proj-body-item-tag-holder">
							<div className="proj-body-item-tags">Product Design</div>
							<div className="proj-body-item-tags">Front-End</div>
							<div className="proj-body-item-tags">Web App</div>
							<div className="proj-body-item-tags">Responsive</div>
						</div>
						<div className="proj-body-item-tag-link">
							<Link to="/casestudy/sliike" className="proj-body-item-tag-link-text"> View Case Study </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" src={sliike} alt="Sliike"/>
						</div>
					</div>
				</div>
				<div className="proj-body-item">
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
							<Link to="/casestudy/izikjon" className="proj-body-item-tag-link-text"> View Case Study </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" src={izikjonCover} alt="Izikjon"/>
						</div>
					</div>
				</div>
				<div className="proj-body-item">
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
							<Link to="/explore" className="proj-body-item-tag-link-text"> View Design </Link>
						</div>
					</div>
					<div className="proj-body-item-right">
						<div className="proj-body-item-image">
							<img className="proj-body-item-image-image" src={meezoCover}  alt="Meezo"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects