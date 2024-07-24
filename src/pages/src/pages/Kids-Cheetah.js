// put paragraph about cheetahs
// code interactive piece
// cheetah vs avg human running per km/mph calculator


import { Link, Route, Routes } from "react-router-dom";
import { Bat } from './Kids-Bat'
import { Chameleon } from './Kids-Chameleon'
import { Kids } from './Kids';

export function Cheetah(){
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
            </div>
        </>
    )
}