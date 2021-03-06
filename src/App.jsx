// import { useContext } from "react";
import React from "react";
import "./App.css";
// import Toggle from "./components/toggle/Toggle.jsx";
// import Intro from "./components/intro/intro.jsx";
// import About from "./components/about/About.jsx";
// import ProductList from "./components/productList/ProductList.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import { ThemeContext } from "./context";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home/Home.jsx"
import CaseStudy from "./components/casestudy/Cstudy.jsx"
import Sliike from "./components/casestudy/Sliike.jsx"
import Izikjon from "./components/casestudy/Izikjon.jsx"
import Explore from "./components/explore/explore.jsx"
import PageError from "./components/error/PageError.jsx"
import About from "./components/about/About.jsx"

const App = () => {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <Router>
      <nav>
        <Link to="/" className="l"> Home </Link>
        <Link to="/about" className="l"> About </Link>
        <Link to="/explore" className="l"> Explore </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/casestudy" element={<CaseStudy />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/casestudy/sliike" element={<Sliike />}/>
        <Route path="/casestudy/izikjon" element={<Izikjon />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/404" element={<PageError />}/>
      </Routes>
    </Router>
    // <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
    //   <Toggle/>
    //   <Intro/>
    //   <About/>
    //   <ProductList/>
    //   <Contact/>
    //</div>
  )
}





export default App;
