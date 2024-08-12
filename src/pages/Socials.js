import '../components/socials.css';

export function Socials() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h2>Newsletter</h2>
		<form>
			<label for="email>">Email: </label>
			<input type="email" id="email" placeholder="Enter Email" name="email"></input>
			<button type="button" className="btn btn-primary">Submit</button>
		</form>
        <h2>Follow Us!</h2>
            <a href="#/Socials" className="fa fa-facebook"> </a>
            <a href="#/Socials" className="fa fa-twitter"> </a>
            <a href="#/Socials" className="fa fa-youtube"> </a>
            <a href="#/Socials" className="fa fa-instagram"> </a>
        </>
    )
}