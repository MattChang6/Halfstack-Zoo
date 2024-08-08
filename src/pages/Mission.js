import '../components/Mission.css';

export function Mission() {
    return (
        // totally not ripped from san diego zoo mission page
        <>
            <link href='https://fonts.googleapis.com/css?family=Candal' rel='stylesheet'></link>
            <div className='background'>
            <h1 className="ourMission">Our Mission</h1><br />
                <div>
                    <h3 className='title'>Who Are We?</h3>
                    <p className='paragraph'>The M&N Zoo is a local, nonprofit conservation organization. We blend education,
                        science, wildlife health and ethics to develop sustainable solutions.
                    </p><br />
                    <h3 className='title'>Our Mission</h3>
                    <p className='paragraph'>The M&N Zoo is committed to saving species worldwide by combining our knowledge
                        in wildlife and science with our deep passion for nature.
                    </p><br />
                    <h3 className='title'>Our Vision</h3>
                    <p className='paragraph'>20/20 hindsight.</p>
                    <br />
                </div>
            </div>
        </>
    )
}