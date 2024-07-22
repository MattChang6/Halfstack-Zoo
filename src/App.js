import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Kids } from './pages/Kids';
import { Mission } from './pages/Mission';
import { Tickets } from './pages/Tickets';
import { Socials } from './pages/Socials';
import { Donations } from './pages/Donations';
import { Membership } from './pages/Membership';
import { Shop } from './pages/Shop';
import { Events } from './pages/Events';
import './App.css';


function App() {
	return (
		// always have the nav bar at TOP and BOTTOM(need to code) loaded at all times
		<>
		<div>
			<Link to="/"><h3>M&N Zoo</h3></Link>
			<nav className="nav justify-content-end">
				<Link to="/">Home</Link>&emsp;
				<Link to="/Tickets">Tickets</Link>&emsp;
				<Link to="/Events">Events</Link>&emsp;
				<Link to="/Donations">Donations</Link>&emsp;
				<Link to="/Membership">Membership</Link>&emsp;
				<Link to="/Mission">Mission</Link>&emsp;
				<Link to="/Kids">Kids</Link>&emsp;
				<Link to="/Socials">Socials</Link>&emsp;
				<Link to="/Shop">Shop</Link>
			</nav>
		</div>

		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/Kids" element={<Kids />}/>
			<Route path="/Mission" element={<Mission />}/>
			<Route path="/Tickets" element={<Tickets />}/>
			<Route path="/Events" element={<Events />}/>
			<Route path="/Socials" element={<Socials />}/>
			<Route path="/Donations" element={<Donations />}/>
			<Route path="/Membership" element={<Membership />}/>
			<Route path="/Shop" element={<Shop />}/>
		</Routes>
		</>
	)
}

export default App;
