import React, { useContext } from 'react';
import { ThemeContext } from "../../context.js";
import "./pageerror.css";
import construction from "../../img/construction.png"

const PageError = () => {
		// const theme = useContext(ThemeContext);
  // 		const darkMode = theme.state.darkMode;
	return (
		//<div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
		<div className="pe">

			<img className="pe-image"src={construction}/>
			<p>
				<h3 className="pe-caption">Sorry, this page will be back up soon.</h3>
			</p>
			
		</div>
	)
}

export default PageError