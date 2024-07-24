import { Bat } from './Kids-Bat'
import { Cheetah } from './Kids-Cheetah'
import { Chameleon } from './Kids-Chameleon'
import { Link, Route, Routes } from "react-router-dom";


// https://www.w3schools.com/bootstrap5/bootstrap_cards.php
// CLEAN UP STYLE AND PUT INTO .css classes
export function Kids() {
    return (
        <>
            <h1>Kids Page</h1>
            <h2>Discover This Month's Featured Animals!</h2>
            <div className='container mt-3' style={{display: 'flex', gap: '20px', width: '100%'}}>
                <div className='card' style={{width: '30%'}}>
                    <img className='card-img-top' src={require('./images/bat.jpg')} alt='bat' />
                    <div className='card-body'>
                        <h4 className='card-title'>type of bat</h4>
                        <p className='card-text'><Link to="/Kids-Bat">Bat</Link>&emsp;</p>
                    </div>
                </div>
                <div className='card' style={{width: '30%'}}>
                    <img className='card-img-top' src={require('./images/bat.jpg')} alt='cheetah' />
                    <div className='card-body'>
                        <h4 className='card-title'>type of cheetah</h4>
                        <p className='card-text'><Link to="/Kids-Cheetah">Cheetah</Link>&emsp;</p>
                    </div>
                </div>
                <div className='card' style={{width: '30%'}}>
                    <img className='card-img-top' src={require('./images/bat.jpg')} alt='cheetah' />
                    <div className='card-body'>
                        <h4 className='card-title'>type of chameleon</h4>
                        <p className='card-text'><Link to="/Kids-Chameleon">Chameleon</Link>&emsp;</p>
                    </div>
                </div>
            </div>


            <Routes>
			    <Route path="/Kids-Bat" element={<Bat />}/>
                <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                <Route path="/Kids-Chameleon" element={<Chameleon />}/>
            </Routes>
        </>
    )
}