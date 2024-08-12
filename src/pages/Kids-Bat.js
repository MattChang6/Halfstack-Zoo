import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Cheetah } from './Kids-Cheetah';
import { Chameleon } from './Kids-Chameleon';
import { Kids } from './Kids';
import '../components/night.css';
import '../components/Kids-Bat.css';
import hangingBats from './images/hangingBats.jpg'; // Light mode image
import darkModeBat from './images/batFly.png'; // Dark mode image

export function Bat() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imageSrc, setImageSrc] = useState(hangingBats);

    useEffect(() => {
        return () => {
            document.body.classList.remove("dark-mode");
        };
    }, []);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        setIsDarkMode(!isDarkMode);
        setImageSrc(isDarkMode ? hangingBats : darkModeBat);
    };

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Barriecito' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Chicle' rel='stylesheet'></link>
            <div className="batBody">
                <h1 className="kidsPageBat"> Kids Corner!</h1>
                <div style={{paddingLeft: '1%'}}>
                    <Link to="/Kids" className="links">Back</Link>&emsp;
                    <Link to="/Kids-Cheetah" className="links">Cheetahs</Link>&emsp;
                    <Link to="/Kids-Chameleon" className="links">Chameleons</Link>&emsp;
                </div>
                <Routes>
                    <Route path="/Kids" element={<Kids />} />
                    <Route path="/Kids-Cheetah" element={<Cheetah />} />
                    <Route path="/Kids-Chameleon" element={<Chameleon />} />
                </Routes>
                <div>
                    <br />
                    <h2 className="batsTitle">Bats</h2>
                    <div className="inline-container">
                        <img src={imageSrc} className="hangingBats" alt="Bats hanging" />
                        <p className="paragraph">Bats are flying mammals that belong to the order of Chiroptera, Greek for "hand-wing."
                            Although each bat species' diets vary, most eat a variety of insects (crickets, gnats, beetles, etc.).
                            Bats use echolocation, supersonic cries through their nose or mouth to detect objects by echoes
                            reflected back.</p>
                    </div>
                    <div className="buttonContainer">
                        <button
                            className="nightButton"
                            onClick={toggleDarkMode}
                            style={{
                                backgroundColor: isDarkMode ? 'white' : 'black',
                                color: isDarkMode ? 'black' : 'white',
                                border: '1px solid',
                                borderColor: isDarkMode ? 'white' : 'black'
                            }}
                        >
                            {isDarkMode ? 'Daytime' : 'Nighttime'}
                        </button>
                    </div><br />
                    <p className="paragraph">Source: https://www.si.edu/spotlight/bats/batfacts</p>
                </div>
            </div>
        </>
    );
}
