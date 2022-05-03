import React from 'react';
import "./about.css";
import pic5 from "../../img/pic5.jpg"


const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img 
						src={pic5} 
						alt="Obinna in an office" 
						className="a-img"/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					Simple...Creative...Lovely
				</p>
				<p className="a-desc">
					I design contents for people
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
	)
}

export default About