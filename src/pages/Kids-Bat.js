import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Cheetah } from './Kids-Cheetah';
import { Chameleon } from './Kids-Chameleon';
import { Kids } from './Kids';
import '../components/night.css';

export function Bat(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Cleanup function to remove dark mode when the component unmounts
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
            <div className="batBody">
                <h1>Kids Page</h1>
                <Link to="/Kids">Back</Link>&emsp;
                <Link to="/Kids-Cheetah">Cheetahs</Link>&emsp;
                <Link to="/Kids-Chameleon">Chameleon</Link>&emsp;

                <Routes>
                    <Route path="/Kids" element={<Kids />}/>
                    <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                    <Route path="/Kids-Chameleon" element={<Chameleon />}/>
                </Routes>
                <div>
                    <br />
                    <h2>Bats</h2>
                    <p>Bats</p>
                    <p>Implement light/dark mode and change HTML elements when the switch is clicked</p>
                    <button 
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
                </div>
            </div>
        </>
    );
}
