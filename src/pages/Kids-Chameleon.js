// put paragraph about chameleons
// code interactive piece
// randomly place a jpeg of chameleon within square div
// click on chameleon and +1 increment score (need to workshop this)

import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Bat } from './Kids-Bat';
import { Cheetah } from './Kids-Cheetah';
import { Kids } from './Kids';
import { getRandomPosition } from '../components/findChameleon'; 
import '../components/findChameleon.css';

export function Chameleon() {
    const [score, setScore] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        moveImage();
    }, []);

    const moveImage = () => {
        const box = document.getElementById('game-box');
        const image = document.getElementById('chameleon-image');
        const newPosition = getRandomPosition(box.clientWidth, box.clientHeight, image.clientWidth, image.clientHeight);
        setPosition(newPosition);
    };

    const handleImageClick = () => {
        setScore(score + 1);
        moveImage();
    };

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Barriecito' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Agbalumo' rel='stylesheet'></link>
            <div className="chamBackground">
                <h1 className="kidsPageChameleon">Kids Page</h1>
                <div style={{paddingLeft: '1%'}}>
                    <Link to="/Kids" className="links">Back</Link>&emsp;
                    <Link to="/Kids-Bat" className="links">Bats</Link>&emsp;
                    <Link to="/Kids-Cheetah" className="links">Cheetahs</Link>&emsp;
                </div>
                <Routes>
                    <Route path="/Kids" element={<Kids />}/>
                    <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                    <Route path="/Kids-Bat" element={<Bat />}/>
                </Routes>
                <div>
                    <br />
                    <h2 className="chameleonTitle">Chameleons</h2>
                    <p className="score">Find the chameleon!</p>
                    <p className="score">Score: {score}</p>
                    <div id="game-box" className="game-box">
                        <img 
                            id="chameleon-image" 
                            src={require("./images/cartoonCham.png") }
                            alt="Chameleon" 
                            className="chameleon-image"
                            style={{ top: `${position.y}px`, left: `${position.x}px` }}
                            onClick={handleImageClick}
                        />
                    </div><br />
                </div>
                <p className="paraCham">Source: https://kids.nationalgeographic.com/animals/reptiles/facts/chameleon</p>
                <br />
            </div>
        </>
    );
}
