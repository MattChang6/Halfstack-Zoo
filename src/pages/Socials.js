import '../components/socials.css';

export function Socials() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='socialBackground'>
            <h2 className='newsletter'>Newsletter</h2>
            <form className='email'>
                <label for="email>">Email:&emsp; </label>
                <input type="email" id="email" placeholder="Enter Email" name="email"></input>&emsp;
                <button type="button" className="btn btn-primary">Submit</button>
            </form><br /><br />
            <h2 className='newsletter'>Follow Us!</h2>
            <div className='logos'>
                <a href="#/Socials" className="fa fa-facebook"> </a>
                <a href="#/Socials" className="fa fa-twitter"> </a>
                <a href="#/Socials" className="fa fa-youtube"> </a>
                <a href="#/Socials" className="fa fa-instagram"> </a>
            </div><br />
        </div>
        </>
    )
}