// source: https://www.healthline.com/health/how-fast-can-a-human-run#top-speed
// avg human is between 5-10mph, cheetah is 50-80mph

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Bat } from './Kids-Bat';
import { Chameleon } from './Kids-Chameleon';
import { Kids } from './Kids';
import { calculateTime, formatTime } from '../components/runTime'; // Adjust the import path accordingly

export function Cheetah() {
    const [distance, setDistance] = useState(0);
    const [humanSpeed, setHumanSpeed] = useState(5);
    const [cheetahSpeed, setCheetahSpeed] = useState(50);
    const [humanTime, setHumanTime] = useState(null);
    const [cheetahTime, setCheetahTime] = useState(null);

    const handleCalculate = () => {
        const humanMins = calculateTime(distance, humanSpeed);
        const cheetahMins = calculateTime(distance, cheetahSpeed);
        setHumanTime(humanMins);
        setCheetahTime(cheetahMins);
    };

    return (
        <>
            <h1>Kids Page</h1>
            <Link to="/Kids">Back</Link>&emsp;
            <Link to="/Kids-Bat">Bat</Link>&emsp;
            <Link to="/Kids-Chameleon">Chameleon</Link>&emsp;

            <Routes>
                <Route path="/Kids" element={<Kids />}/>
                <Route path="/Kids-Bat" element={<Bat />}/>
                <Route path="/Kids-Chameleon" element={<Chameleon />}/>
            </Routes>
            <div>
                <br />
                <h2>Cheetah</h2>
                <p>Cheetahs run fast!</p>
                <div>
                    <p>Here is the math formula that we use:</p>
                    <p>(Distance / Speed) x 60 seconds = Time</p>
                    <p>But what if we don't get a whole number? How do we calculate the seconds?</p>
                    <p>Well you take the numbers after the decimal point and multiply that by 60!</p>
                    <p>Example: 1 mile / 50mph = 0.02</p>
                    <p>0.02 * 60 seconds = 1.2 minutes</p>
                    <p>Finding seconds: .2 minutes * 60 = 12 seconds</p>
                    <p>Giving us the answer of a cheetah running 1 mile at 50mph a time of 1 minute and 12 seconds!</p>
                </div>
                <div>
                    <label>
                        Distance (miles):
                        <input 
                            type="number" 
                            value={distance} 
                            onChange={(e) => setDistance(Number(e.target.value))}
                            min="0"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Human Speed (mph):
                        <input 
                            type="range" 
                            min="5" 
                            max="10" 
                            value={humanSpeed} 
                            onChange={(e) => setHumanSpeed(Number(e.target.value))} 
                        />
                        {humanSpeed} mph
                    </label>
                </div>
                <div>
                    <label>
                        Cheetah Speed (mph):
                        <input 
                            type="range" 
                            min="50" 
                            max="80" 
                            value={cheetahSpeed} 
                            onChange={(e) => setCheetahSpeed(Number(e.target.value))} 
                        />
                        {cheetahSpeed} mph
                    </label>
                </div>
                <button onClick={handleCalculate}>Calculate</button>

                {humanTime !== null && cheetahTime !== null && (
                    <div>
                        <p>Time for Human: {formatTime(humanTime)}</p>
                        <p>Time for Cheetah: {formatTime(cheetahTime)}</p>
                    </div>
                )}
            </div>
        </>
    );
}
