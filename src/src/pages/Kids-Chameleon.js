// put paragraph about chameleons
// code interactive piece
// randomly place a jpeg of chameleon within square div
// click on chameleon and +1 increment score (need to workshop this)

import { Link, Route, Routes } from "react-router-dom";
import { Bat } from './Kids-Bat'
import { Cheetah } from './Kids-Cheetah'
import { Kids } from './Kids';

export function Chameleon(){
    return (
        <>
            <h1>Kids Page</h1>
            <Link to="/Kids">Back</Link>&emsp;
            <Link to="/Kids-Bat">Bat</Link>&emsp;
            <Link to="/Kids-Cheetah">Cheetah</Link>&emsp;


            <Routes>
			    <Route path="/Kids" element={<Kids />}/>
                <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                <Route path="/Kids-Bat" element={<Bat />}/>
            </Routes>
            <div>
                <br />
                <h2>Chameleon</h2>
            </div>
        </>
    )
}