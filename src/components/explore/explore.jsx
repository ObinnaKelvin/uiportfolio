import React, { useContext } from 'react';
import { ThemeContext } from "../../context.js";
import "./explore.css";
import construction from "../../img/construction.png"

const Explore = () => {
		// const theme = useContext(ThemeContext);
  // 		const darkMode = theme.state.darkMode;
	return (
		//<div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
		<div className="exp">

			<img className="exp-image"src={construction}/>
			<p>
				<h3 className="exp-caption">Sorry, this page will be back up soon.</h3>
			</p>
			
		</div>
	)
}

export default Explore