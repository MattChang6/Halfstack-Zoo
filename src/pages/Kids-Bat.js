import { Link, Route, Routes } from "react-router-dom";
import { Cheetah } from './Kids-Cheetah'
import { Chameleon } from './Kids-Chameleon'
import { Kids } from './Kids';

export function Bat(){
    return (
        <>
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
                <h2>Bat</h2>
            </div>
        </>
    )
}