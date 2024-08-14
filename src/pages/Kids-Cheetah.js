// source: https://www.healthline.com/health/how-fast-can-a-human-run#top-speed
// avg human is between 5-10mph, cheetah is 50-80mph

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Bat } from './Kids-Bat';
import { Chameleon } from './Kids-Chameleon';
import { Kids } from './Kids';
import { calculateTime, formatTime } from '../components/runTime';
import '../components/Kids-Cheetah.css';

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
            <link href='https://fonts.googleapis.com/css?family=Barriecito' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
            <div className="cheetahBackground">
                <h1 className="kidsPageCheetah">Kids Page</h1>
                <div style={{paddingLeft: '1%'}}>
                    <Link to="/Kids" className="links">Back</Link>&emsp;
                    <Link to="/Kids-Bat" className="links">Bats</Link>&emsp;
                    <Link to="/Kids-Chameleon" className="links">Chameleons</Link>&emsp;
                </div>
                <Routes>
                    <Route path="/Kids" element={<Kids />}/>
                    <Route path="/Kids-Bat" element={<Bat />}/>
                    <Route path="/Kids-Chameleon" element={<Chameleon />}/>
                </Routes>
                <div>
                    <br />
                    <h2 className="cheetahTitle">Cheetahs</h2>
                    <div className="inline-container">
                        <img src={require("./images/cheetah2.jpg")} alt="cheetah2" className="cheetahImg"/>
                        <p className="paraCheetah"> 
                        Cheetahs are native to Africa. Over the past 50 years, cheetahs have become extinct
                        in 13 countries. Their average lifespan in the wild is 8-10 years. 
                    </p>
                    </div>

                    <h2 style={{paddingLeft: '1%'}}>Cheetah vs Human Calculator</h2>
                    <div style={{paddingLeft: '1%'}}>
                    <p className="paragraph">Here is the math formula that we use: (Distance / Speed) x 60 seconds = Time. But 
                        what if we don't get a whole number? How do we calculate the seconds? Well, you 
                        take the numbers after the decimal point and multiply that by 60! Example: 1 
                        mile / 50mph = 0.02. 0.02 * 60 seconds = 1.2 minutes. Finding seconds: .2 minutes
                        * 60 = 12 seconds. Giving us the answer of a cheetah running 1 mile at 50mph a 
                        time of 1 minute and 12 seconds!</p>
                    </div>
                    <div className="calculator">
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
                        </div><br />
                        <button onClick={handleCalculate}>Calculate</button><br /><br />
                        <img src={require("./images/manRun.png")} alt="manRun" className="manRun"></img>
                        <img src={require("./images/cheetahRun.png")} alt="cheetah2" className="cheetahRun"></img>
                    </div>

                    {humanTime !== null && cheetahTime !== null && (
                        <div className="result">
                            <p>Time for Human: {formatTime(humanTime)}</p>
                            <p>Time for Cheetah: {formatTime(cheetahTime)}</p>
                        </div>
                    )}
                </div>
                <p className="paraCheetah">Source: https://nationalzoo.si.edu/animals/cheetah</p><br />
            </div>
        </>
    );
}
