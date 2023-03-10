import React, { useContext } from 'react';
import { ThemeContext } from "../../context.js";
import Toggle from "../toggle/Toggle.jsx";
import Intro from "../intro/intro.jsx";
import Projects from "../projects/Projects.jsx";
// import About from "../about/About.jsx";
// import ProductList from "../productList/ProductList.jsx";
import Contact from "../contact/Contact.jsx";
import "./home.css";
import Stats from '../stats/Stats.jsx';

const Home = () => {
	  	const theme = useContext(ThemeContext);
  		const darkMode = theme.state.darkMode;
	return (
		<div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
	      <Toggle/>
	      <Intro/>
		  <Stats/>
	      <Projects/>
	     {/* <About/>*/}
	     {/* <ProductList/>*/}
	      <Contact/>			
		</div>
	)
}

export default Home