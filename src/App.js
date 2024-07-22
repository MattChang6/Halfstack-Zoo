import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Kids } from './pages/Kids';
import { Mission } from './pages/Mission';
import { Tickets } from './pages/Tickets';
import { Contact } from './pages/ContactUs';
import { Donations } from './pages/Donations';
import { Membership } from './pages/Membership';
import { Shop } from './pages/Shop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		// always have the nav bar at TOP and BOTTOM(need to code) loaded at all times
		<>
		<div>
			<Link to="/"><h3>M&N Zoo</h3></Link>
			<nav className="Nav">
				<Link to="/">Home&emsp;</Link>
				<Link to="/Tickets">Tickets&emsp;</Link>
				<Link to="/Donations">Donations&emsp;</Link>
				<Link to="/Membership">Membership&emsp;</Link>
				<Link to="/Mission">Mission&emsp;</Link>
				<Link to="/Kids">Kids&emsp;</Link>
				<Link to="/ContactUs">Contact&emsp;</Link>
				<Link to="/Shop">Shop</Link>
			</nav>
		</div>

		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/Kids" element={<Kids />}/>
			<Route path="/Mission" element={<Mission />}/>
			<Route path="/Tickets" element={<Tickets />}/>
			<Route path="/ContactUs" element={<Contact />}/>
			<Route path="/Donations" element={<Donations />}/>
			<Route path="/Membership" element={<Membership />}/>
			<Route path="/Shop" element={<Shop />}/>
		</Routes>
		</>
	)
}

export default App;
