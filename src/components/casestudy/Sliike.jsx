import React, { useContext, useState } from 'react';
import { ThemeContext } from "../../context.js";
import "./sliike.css";
import survey from "../../img/survey.png";
import sketches from "../../img/sketches.png";
import hfd from "../../img/hfd.png";
import sliders from "../../img/holder.png";
import business from "../../img/business.png";
import unique from "../../img/unique.png";
import contact from "../../img/contact.png";
import hero from "../../img/hero.png";
import bulb from "../../img/lightbulb.png";
import userdb from "../../img/user-dashboard.png";
import signup from "../../img/signup.png";
import Modal from "../modal/Modal.jsx";


const Sliike = () => {
	  	// const theme = useContext(ThemeContext);
  		// const darkMode = theme.state.darkMode;
  		const [openModal, setOpenModal] = useState(false);
	return (
		//<div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
			<div className="cs">
				<div className="cs1">
					<div className="hero">
						<div className="hero-image">
							<img class = "cs1-hero-image" src={hero} alt="A screenshot of Sliike's Hero section" onClick={() => setOpenModal(true)} />
							<Modal open={openModal} onClose={()=>setOpenModal(false)} image={hero} alt="A screenshot of Sliike's Hero section"/>
						</div><br/>
						<div className="hero-caption"><h1>Revamping Sliike's landing page and user dashboards</h1></div>
						<div className="hero-details">
							<div className="hero-detail">
								<p className="hero-detail-header">TIMELINE</p>
								<p className="hero-detail-detail">1<span>½</span> Month</p>
								{/*<p className="hero-detail-detail">Jan - Feb 2022</p>*/}
							</div>
							<div className="hero-detail">
								<p className="hero-detail-header">PLATFORM</p>
								<p className="hero-detail-detail">Responsive Website</p>
							</div>
							<div className="hero-detail">
								<p className="hero-detail-header">MY ROLE</p>
								<p className="hero-detail-detail">Product Designer</p>
							</div>
						</div>
					</div>
					<div className="cs1-header"><h1>Introduction</h1></div>
					<div className="cs1-body">
							<p>
							Sliike is a platform that enables customers hire the service of seasoned
							beauticians. Beauticians can also signup on Sliike so as to grow their businesses.
							In the new landing page, I set out to solve the problems below in 1 and a half month.
							The results were amazing.
							</p>
					</div>
					<div className="cs1-header"><h1>My Role</h1></div>
					<div className="cs1-body">
							<p>
							I made the designs, user testing and development of this project from end to end.
							I also collaborated with the web developers to ensure that my ideas were clearly 
							communicated.
							</p>
					</div>
					<div className="cs1-header"><h1>Problem</h1></div>
					<div className="cs1-body">
							<p>
							Sliike's growth was stagnant over a period of time. To reach new clients and customers,
							some challenges that hindered it's growth needed to be addressed.
							</p>
							<br/>
							<h3>The old landing page was not looking attractive.</h3>
							<p>
							<br/>
							While Sliike prided on good quality service as a big brand it's website needed to project 
							that image.
							</p><br/>
							<h3>Attract it's target demographic.</h3>
							<p>
							<br/>
							The website needed to capture the attention of the black community in Canada. We wish to 
							have about 90% blacks as customers and clients.
							</p><br/>
							<h3>Appealing user dashboard.</h3>
							<p>
							<br/>
							While the overall website needed a facelift, customers and clients needed to have a good
							user experience in the course of business transactions.
							</p><br/>
							<h3>Promote Sliike's mobile app.</h3>
							<p>
							<br/>
							The app was one of Sliike's selling point. The website needed to drive up Sliike's app downloads.
							</p><br/>
					</div>
					<div className="cs1-header"><h1>Goal</h1></div>
					<div className="cs1-body">
							<p>
							For Sliike's UI Design to be achieved, the following milestones needed to be reached.
							</p>
							<br/>
							<h3>Communicate Sliike's value proposition</h3>
							<p>
							<br/>
							To give clearer messaging about the brand and why they stand out.
							</p><br/>
							<h3>Attract it's target demographic.</h3>
							<p>
							<br/>
							The website needed to capture the attention of the black community in Canada. We wish to 
							have about 90% blacks as customers and clients.
							</p><br/>
							<h3>Making the website user-friendly.</h3>
							<p>
							<br/>
							We wanted the users to spend more time on the website, not just because of the services but 
							because they enjoy the experience when using the website.
							</p><br/>
							<h3>Drive Sliike's mobile app downloads.</h3>
							<p>
							<br/>
							We want to convert users from web to app, so that they enjoy a better experience,
							and we could focus our resources on the app instead of maintaining several platforms.
							</p><br/>
					</div>
					<div className="cs1-header"><h1>Early Ideation</h1></div>
					<div className="cs1-body">
							<p>
							To make sure that the designs were professional and standard, I outlined 4 key design principles 
							I worked with. The design principles used are as follows:

							{/*I kicked off the design sprint by */}
							</p>
							<br/>
								<div className="cs1-emphasis">
									<h3>4 Key Design Principles</h3>
									<br/>
									<p className="cs1-emphasis-sub">
									{/*<br/>*/}
									<h4 className="sub">Place users in control of the interface.</h4>
									<span className="sub-details">
									Good UIs instill a sense of control in their users. Keeping users in control makes 
									them comfortable; they will learn quickly and gain a fast sense of mastery.
									Navigation should always be clear and self-evident. Users should be able to enjoy 
									exploring the interface of any software product. Even complex B2B products full of 
									features shouldn’t intimidate users so that they are afraid to press a button. 
									</span>
									</p>
									<br/>
									<p className="cs1-emphasis-sub">
									{/*<br/>*/}
									<h4 className="sub">Make it comfortable for a user to interact with a product.</h4>
									<span className="sub-details">
									Interfaces shouldn’t contain information that is irrelevant or rarely needed. Irrelevant 
									information introduces noise in UI —it competes with the relevant information and diminishes 
									its relative visibility. Simplify interfaces by removing unnecessary elements or content that 
									does not directly support user tasks. Strive to design UI in a way that all information presented 
									on the screen will be valuable and relevant. Examine every element and evaluate it based on the 
									value it delivers to users.
									</span>
									</p>
									<br/>
									<p className="cs1-emphasis-sub">
									{/*<br/>*/}
									<h4 className="sub">Reduce cognitive load.</h4>
									<span className="sub-details">
									Cognitive load is the amount of mental processing power required to use a product.
									It's better to avoid making users think/work too hard to use your product. One of the
									ways to achieve this is to reduce the number of actions required to complete a task.
									</span>
									</p>
									<br/>
									<p className="cs1-emphasis-sub">
									{/*<br/>*/}
									<h4 className="sub">Make user interfaces consistent.</h4>
									<span className="sub-details">
									Consistency is an essential property of good UI—consistent design is intuitive design. 
									Consistency is one of the strongest contributors to usability and learnability. The main 
									idea of consistency is the idea of transferable knowledge — let users transfer their knowledge 
									and skills from one part of an app’s UI to another, and from one app to another app.
									</span>
									</p><br/>
								</div>
							<br/><br/>
							<h3>MockUps</h3>
							<p>
							<br/>
							Next, I started sketching up design ideas as the inspiration were flowing in. At this stage the focus
							was to get as much ideas as possible and then streamline them to meet goal of this project.
							</p>
							<br/>
							<div>
								<img class = "cs1-body-image" src={sketches} alt="A screenshot of early ideation sketches"  onClick={() => setOpenModal(true)}/>
								<Modal open={openModal} onClose={()=>setOpenModal(false)} image={sketches} alt="A screenshot of early ideation sketches"/>
							</div>
							<p>
							<br/>
							I then turned these early ideas into high fidelity designs. I experimented with different colors and pictures
							as I continued refining the designs.
							</p>
							<div>
								<img class = "cs1-body-image" src={hfd} alt="Four versions of Hero section" onClick={() => setOpenModal(true)}/>
								{/*<Modal open={openModal} onClose={()=>setOpenModal(false)} image={hfd} alt="Four versions of Hero section"/>*/}
							</div>							

					</div>
					<div className="cs1-header"><h1>User Testing</h1></div>
					<div className="cs1-body">
							<p>
							I conducted user tests/survey with 8 persons outside Sliike so that the responses will
							be more accurate. This is what the survey looks like.
							</p>
							<br/>
							<div>
								<img class = "cs1-body-image" src={survey} alt="A screenshot of the survey results"/>
							</div>
							<p>
							<br/>
							I continued to iterate the designs to ensure that Sliike's unique value propositions were
							clearly communicated.
							</p><br/>
							
					</div>
					<div className="cs1-header"><h1>Final Designs</h1></div>
					<div className="cs1-body">
							{/*<h3>Before and After</h3>*/}
							<p>
							Before the redesign, there was lack of focus as to what Sliike offers and it's target audience.
							The website didn't look professional. Below is a walkthrough of what the new website looks like.
							</p>
							<br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>	
									<h3>A beautician hero section</h3>									
								</div>
							</div>
								<p>
								<br/>
								After several reviews, the team decided on the dominant colour. The images were carefully selected
								to reflect Sliike's business.
								</p><br/>
							<div>
								<img class = "cs1-body-image" src={sliders} alt="A screenshot of the chosen sliders"/>
							</div>
							<br/><br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>	
									<h3>Business Category</h3>									
								</div>
							</div>							
							{/*<h3>Business Category</h3>*/}
							<p>
							<br/>
							The website needed to capture the attention of the black community in Canada. We wish to 
							have about 90% blacks as customers and clients.
							</p><br/>
							<div>
								<img class = "cs1-body-image" src={business} alt="A screenshot of the chosen sliders"/>
							</div>
							<br/><br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>	
									<h3>Unique Value Proposition</h3>									
								</div>
							</div>
							<p>
							<br/>
							The website needed to clearly state why Sliike's business is unique and the services they render.
							</p><br/>
							<div>
								<img class = "cs1-body-image" src={unique} alt="A screenshot of the chosen sliders"/>
							</div>
							<br/><br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>	
									<h3>Classy Contact Form</h3>
								</div>
							</div>
							<p>
							<br/>
							The website needed to capture the attention of the black community in Canada. We wish to 
							have about 90% blacks as customers and clients.
							</p><br/>
							<div>
								<img class = "cs1-body-image" src={contact} alt="A screenshot of the chosen sliders"/>
							</div>
							<br/><br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>
									<h3>Appealing user dashboard.</h3>
								</div>
							</div>
							<p>
							<br/>
							While the overall website needed a facelift, customers and clients needed to have a good
							user experience in the course of business transactions.
							</p><br/>
							<div>
								<img class = "cs1-body-image" src={userdb} alt="A screenshot a prospective user dashboard"/>
							</div>
							<br/><br/>
							<div className="highlights">
								<div class = "highlights-sizing">
									<img class = "highlights-icon" src={bulb} alt="An image of bulb"/>
									<h3>Modern signup page.</h3>
								</div>
							</div>
							<p>
							<br/>
							The former design had seperate pages for beautician or client to sign up. The challenge this posed was that the user may have to patiently wait
							for the page to load. My design improved the user experience so that there is just one single page for sign up and a toggle button to 
							differentiate between client or beautician sign up.
							</p><br/>
							<div>
								<img class = "cs1-body-image" src={signup} alt="A screenshot a prospective user dashboard"/>
							</div>
							<br/><br/>
							<h3>Promote Sliike's mobile app.</h3>
							<p>
							<br/>
							The app was one of Sliike's selling point. The website needed to drive up Sliike's app downloads.
							</p><br/>
					</div>
					<div className="cs1-header"><h1>Future Goals</h1></div>
					<div className="cs1-body">
							{/*<h3>Before and After</h3>*/}
							<p>
							As a dynamic designer, here are my future plans for Sliike's landing page:
							</p>
							<br/>
							<h3>Update and Maintenance</h3>
							<p>
							<br/>
							I would ensure that promos, deals and new features are updated.
							</p><br/>
							<br/>{/*<br/>*/}
							<h3>Encourage app downloads</h3>
							<p>
							<br/>
							To drive app downloads, I plan to gradually take down features on the website and link users to download the app.
							</p><br/>
							<p>
							<br/>
							This design work really helped me put my creative skills to good use. I enjoyed the process from ideation, design and testing.
							I'm available to collaborate on more desing projects.
							</p><br/>
							
							<p>
							<br/>
							Thank you for following through. Hope you enjoyed learning about my designs and thought process. 🥰🥰
							</p><br/>
					</div>
				</div>
			</div>			
		
	)
}

export default Sliike