
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from 'react';
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleClick = () => {
		theme.dispatch({type:"TOGGLE"})
	}

	return (
		<div className="t">
			{/*Toggle*/}
			<img src={Sun} alt="" className="t-icon"  style={{height: "20px", width: "20px"}}/>
			<img src={Moon} alt="" className="t-icon" style={{height: "20px", width: "20px"}}/>
			<div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? "0px" : "25px"}}></div>
		</div>
	)
}

export default Toggle