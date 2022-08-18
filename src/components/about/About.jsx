import React from 'react';
import "./about.css";
import pic5 from "../../img/pic5.jpg"


const About = () => {
	return (
		<div className="a">

			<h1 className="a-title">My Story</h1>
{/*			<div className="a-title">
				<h1>My Story</h1>
				<h1>My Story</h1>
			</div>*/}
			<div className="a-desc">
				<div className="a-desc-left">
					<div className="a-desc-card bg"></div>
					<div className="a-desc-card">
						<img 
							src={pic5} 
							alt="Obinna in an office" 
							className="a-img"
						/>
					</div>
				</div>
				<div className="a-desc-right">
					
{/*					<p className="a-sub">
						Simple...Creative...Lovely
					</p>*/}
					<p className="a-desc-text">
					Hi, I'm Obinna Okere Kelvin - a designer, developer and database engineer hoping to further my career in the tech space.
					<br /><br />
					I was born in Port Harcourt, Nigeria but spent most of my life in Lagos. Growing up, I had a unique perspective of the world - being Nigerian, and being black. I learned that with their lives, anyone can tell a unique and beautiful story irrespective of their nationality or culture. I also learnt that if I must improve then it's important to be open to change and fresh ideas.
					<br /><br />
					I found a love for art, design and technology. At a very young age, I became fascinated with the way people think, feel, and create useful things. When this fascination became an obsession then I knew I had found my passion. I graduated from the Federal University of Technology, Owerri, with a B.Sc. in Computer Science.
					<br /><br />
					Currently, I'm an Enterprise Application Support Engineer and Business Data Analyst at Lagoon Hospitals. {/*I lead design strategy for our suite of personalization products, and co-led product design for the 2020 Presidential Election. I also previously led the user experience for our suite of publishing tools. */}
					<br /><br />
					{/*Before joining The Post, I completed an 8-month research project for how college students can better care for their mental health, and used the research to help design a university telemental health platform with UniWellness.
					<br /><br />*/}
					Outside of tech and design, I'm an pencil artist and a major football fan who loves to travel and experience life in all parts of the world.
					<br /><br />
					I'm always down to collaborate when I have the time. Reach out and let's chat!
					<br /><br />

					</p>
					<div className="a-tools">
							<svg 
								width="384px" 
								height="384px" 
								viewBox="-64 0 384 384" 
								version="1.1" 
								xmlns="http://www.w3.org/2000/svg"
								className="a-items"
							>
							    <g>
							        <path d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z" fill="#0ACF83"></path>
							        <path d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z" fill="#A259FF"></path>
							        <path d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z" fill="#F24E1E"></path>
							        <path d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z" fill="#FF7262"></path>
							        <path d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z" fill="#1ABCFE"></path>
							    </g>
							</svg>
							<svg 
								width="24px" 
								height="24px" 
								viewBox="0 0 24 24" 
								role="img" 
								xmlns="http://www.w3.org/2000/svg"
								className="a-items"
								fill="pink"
							>
							<path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm3.24 18.76a3.623 3.623 0 0 1-3.62 3.64H4.63c-2 0-3.63-1.63-3.63-3.63V4.93c0-2 1.63-3.63 3.63-3.63h14.73a3.63 3.63 0 0 1 3.63 3.63v14.13zm-13.5-7.81l2.8 5.38c.05.08.02.16-.06.16h-1.74c-.11 0-.16-.03-.21-.13-.64-1.32-1.29-2.64-1.96-4.06H8.3c-.6 1.34-1.26 2.75-1.9 4.07-.05.08-.1.11-.18.11H4.57c-.1 0-.11-.08-.06-.14l2.74-5.22L4.6 6.14c-.06-.08 0-.14.06-.14h1.72c.1 0 .14.02.18.11.63 1.32 1.27 2.68 1.87 4.01h.02c.58-1.32 1.22-2.69 1.84-4 .05-.08.08-.13.18-.13h1.61c.08 0 .11.06.06.14l-2.65 5.12zm3.29 1.63c0-2.33 1.55-4.15 4.01-4.15.21 0 .32 0 .52.02V6.1c0-.06.05-.1.1-.1h1.58c.08 0 .1.03.1.08v9.18c0 .27 0 .61.05.98 0 .06-.02.08-.08.11-.84.4-1.72.58-2.56.58-2.17.01-3.72-1.33-3.72-4.05zm4.53-2.56c-.14-.06-.34-.1-.58-.1-1.26 0-2.14.97-2.14 2.58 0 1.84.9 2.58 2.03 2.58.24 0 .5-.03.69-.11v-4.95z"/>
							</svg>
							<svg 
							xmlns="http://www.w3.org/2000/svg"
							aria-label="React" 
							role="img"
							className="a-items"
							viewBox="0 0 512 512">
							<rect
							width="512" height="512"
							rx="15%"
							fill="#fff"/>
							<circle cx="256" cy="256" r="36" fill="#61dafb"/>
							<path stroke="#61dafb" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"/>
							</svg>
					</div>
				</div>				
			</div>

			<div className="a-education">
				<div className="a-education-desc">
					<h1>Education</h1>
					<hr className="a-line"/><br/>
					<div className="a-education-desc-text1">
						<p>Federal University of Technology, Owerri</p>
					</div><br/>
					<p  className="a-education-desc-text2"><em>Bachelor of Science in Computer Science - November 2014</em></p>
				</div>
			</div>

			<div className="a-experience">
				<div className="a-experience-left">
					<h1>Experience</h1>
					<hr className="a-line"/><br/>
					<p className="a-experience-desc-text1">Lagoon Hospitals</p>
					<br/>
					<p  className="a-experience-desc-text2"><em>Business Data Reporting Analyst | January 2020 - Present</em></p>
					<br/>
					<p className="a-experience-desc-text1">Cornerstone Insurance PLC</p>
					<br/>
					<p  className="a-experience-desc-text2"><em>Infrastructure Support & Web Content Manager | January 2017 - December 2020</em></p>
				</div>
				<div className="a-experience-right">
					<h1>Skills</h1>
					<hr className="a-line"/><br/>
					<p className="a-experience-desc-text1">General</p>
						<div className="a-experience-item-tag-holder">
							<div className="a-experience-item-tags">UI/UX</div>
							<div className="a-experience-item-tags">Product Design</div>
							<div className="a-experience-item-tags">Storyboarding</div>
							<div className="a-experience-item-tags">Wireframing</div>
							<div className="a-experience-item-tags">User Research</div>
							<div className="a-experience-item-tags">Usability Testing</div>
							<div className="a-experience-item-tags">Frontend Development</div>
						</div>
						<br/>
					<p  className="a-education-desc-text1">Design</p>
						<div className="a-experience-item-tag-holder">
							<div className="a-experience-item-tags">Adobe Creative Suite</div>
							<div className="a-experience-item-tags">Figma</div>
							<div className="a-experience-item-tags">Sketch</div>
						</div>
						<br/>
					<br />
					<p  className="a-education-desc-text1">Engineering</p>
						<div className="a-experience-item-tag-holder">
							<div className="a-experience-item-tags">HTML5/CSS3</div>
							<div className="a-experience-item-tags">React JS</div>
							<div className="a-experience-item-tags">Node JS</div>
							<div className="a-experience-item-tags">Mongo DB</div>
							<div className="a-experience-item-tags">SQL</div>
							<div className="a-experience-item-tags">Git</div>
							<div className="a-experience-item-tags">Command Line</div>
						</div>
						<br/>
				</div>
			</div>


		</div>
	)
}

export default About