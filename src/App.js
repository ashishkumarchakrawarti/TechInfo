
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

// Import the pages
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Dclock from "./Dclock";

import './App.css'

function App() {
return (
	<div >
	
	  <Router>
	  <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
                
       
		<nav className="flex justify-between">
            <li className="flex "><Link to="/" className="text-decoration-none"><h1 className="navbar-brand">TechInfo</h1></Link></li>
			<ul className="navbar flex">
				<li><Link to="home" className="text-decoration-none">Home </Link></li>
				<li><Link to="about" className="text-decoration-none">About </Link></li>
				<li><Link to="service" className="text-decoration-none">Service </Link></li>
				<li><Link to="contact" className="text-decoration-none">Contact </Link></li>
				<Dclock/>
			</ul>
		</nav>
		</div>
          </div>
        </div>
<div>
        <Routes>
			<Route exact path="/" element={<h1>Home Page</h1>} />
			<Route exact path="home" element={<Home />} />
			<Route exact path="about" element={<About />} />
			<Route exact path="service" element={<Service />} />
            <Route exact path='contact' element={<Contact/>}/>
		</Routes>
</div>
</Router>
<Footer/>
</div>
);
}
export default App;





 		

