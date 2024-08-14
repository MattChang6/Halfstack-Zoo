import { Bat } from './Kids-Bat'
import { Cheetah } from './Kids-Cheetah'
import { Chameleon } from './Kids-Chameleon'
import { Link, Route, Routes } from "react-router-dom";
import '../components/Kids.css';


// https://www.w3schools.com/bootstrap5/bootstrap_cards.php
// CLEAN UP STYLE AND PUT INTO .css classes
export function Kids() {
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Barriecito' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Bagel Fat One' rel='stylesheet'></link>
        <div className='kidsBackground'>
            <br />
            <h1 className='kidsPage'>Kids Corner!</h1>
            <h2 className='discover'>Discover This Month's Featured Animals!</h2>
            <div className='container mt-3 cardContainer'>
                    <div className='card'>
                        <a href='#/Kids-Bat'>
                        <img className='card-img-top animalImage' src={require('./images/bat.jpg')} alt='bat' />
                        </a>
                        <div className='card-body'>
                            <h4 className='card-title'>Bats</h4>
                            <button className='kidsButton'><Link to="/Kids-Bat" className='card-text'>Learn More</Link></button>
                        </div>
                    </div>
                    <div className='card'>
                        <a href='#/Kids-Cheetah'>
                        <img className='card-img-top' src={require('./images/cheetah.jpg')} alt='cheetah' />
                        </a>
                        <div className='card-body'>
                            <h4 className='card-title'>Cheetahs</h4>
                            <button className='kidsButton'><Link to="/Kids-Cheetah" className='card-text'>Learn More</Link></button>
                        </div>
                    </div>
                    <div className='card'>
                        <a href='#/Kids-Chameleon'>
                        <img className='card-img-top' src={require('./images/chameleon.jpg')} alt='chameleon' />
                        </a>
                        <div className='card-body'>
                            <h4 className='card-title'>Chameleons</h4>
                            <button className='kidsButton'><Link to="/Kids-Chameleon" className='card-text'>Learn More</Link></button>
                        </div>
                    </div>
                </div><br/>
            </div>


            <Routes>
			    <Route path="/Kids-Bat" element={<Bat />}/>
                <Route path="/Kids-Cheetah" element={<Cheetah />}/>
                <Route path="/Kids-Chameleon" element={<Chameleon />}/>
            </Routes>
        </>
    )
}
