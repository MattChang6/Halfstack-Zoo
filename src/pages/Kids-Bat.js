import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Cheetah } from './Kids-Cheetah';
import { Chameleon } from './Kids-Chameleon';
import { Kids } from './Kids';
import '../components/night.css';
import '../components/Kids-Bat.css';

export function Bat(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Remove dark css when leaving page
        return () => {
            document.body.classList.remove("dark-mode");
        };
    }, []);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Barriecito' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Chicle' rel='stylesheet'></link>
            <div className="batBody">
                <h1 className="kidsPageBat"> Kids Corner!</h1>
                <Link to="/Kids" className="links">Back</Link>&emsp;
                <Link to="/Kids-Cheetah" className="links">Cheetahs</Link>&emsp;
                <Link to="/Kids-Chameleon" className="links">Chameleon</Link>&emsp;

                <Routes>
                    <Route path="/Kids" element={<Kids />}/>
                    <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                    <Route path="/Kids-Chameleon" element={<Chameleon />}/>
                </Routes>
                <div>
                    <br />
                    <h2 className="batsTitle">Bats</h2>
                    
                    <p className="paragraph">Bats are flying mammals that belong to the order of Chiroptera, Greek for "hand-wing."</p>
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
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div><br />
                    <p className="paragraph">Source: https://www.si.edu/spotlight/bats/batfacts</p>
                </div>
            </div>
        </>
    );
}
