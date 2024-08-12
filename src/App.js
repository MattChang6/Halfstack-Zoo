import React, { useState} from "react";
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
import { Bat } from './pages/Kids-Bat';
import { Cheetah } from './pages/Kids-Cheetah';
import { Chameleon } from './pages/Kids-Chameleon';
import Footer from './components/Footer';
import { Cart } from './pages/Cart';
import './App.css';


function App() {
	const [showTicketsEvents, setShowTicketsEvents] = useState(false);
	const [showDonationsGroup, setShowDonationsGroup] = useState(false);
	return (
		<>
		<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
			<div style={{ display:'inline'}}>
			<nav className="Nav">
            <Link to="/"><img className="logoNav" src={require("./pages/images/logo.png")} alt="Logo"></img></Link>
            <span className="header">
                <Link to="/">Home</Link>&emsp;

                <div 
                    className="dropdown"
                    onMouseEnter={() => setShowTicketsEvents(true)}
                    onMouseLeave={() => setShowTicketsEvents(false)}
                >
                    <span className="dropbtn">Tickets & Events</span>
                    {showTicketsEvents && (
                        <div className="dropdown-content">
                            <Link to="/Tickets">Tickets</Link>
                            <Link to="/Events">Events</Link>
                        </div>
                    )}
                </div>&emsp;
                <Link to="/Kids">Kids</Link>&emsp;
				<Link to="/Mission">Mission</Link>&emsp;
				<div 
                    className="dropdown"
                    onMouseEnter={() => setShowDonationsGroup(true)}
                    onMouseLeave={() => setShowDonationsGroup(false)}
                >
                    <span className="dropbtn">Support Us</span>
                    {showDonationsGroup && (
                        <div className="dropdown-content">
                            <Link to="/Donations">Donations</Link>
                            <Link to="/Membership">Membership</Link>
                            <Link to="/Shop">Shop</Link>
                            <Link to="/Cart">Cart</Link>
                        </div>
                    )}
                </div>&emsp;

                <Link to="/Socials">Socials</Link>
            </span>
        </nav>
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Kids" element={<Kids />} />
				<Route path="/Mission" element={<Mission />} />
				<Route path="/Tickets" element={<Tickets />} />
				<Route path="/Events" element={<Events />} />
				<Route path="/Socials" element={<Socials />} />
				<Route path="/Donations" element={<Donations />} />
				<Route path="/Membership" element={<Membership />} />
				<Route path="/Shop" element={<Shop />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="/Kids-Bat" element={<Bat />} />
				<Route path="/Kids-Cheetah" element={<Cheetah />} />
				<Route path="/Kids-Chameleon" element={<Chameleon />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
