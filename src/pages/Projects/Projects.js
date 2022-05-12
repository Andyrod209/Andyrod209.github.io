import './projects.css'
const Projects = () => {
    return ( 
        
        <div className='div-pro'>
            <h1 className='projects-title'>Projects Page</h1>
            <small>CLick on any card to checkout project.</small>
        <div className="projects">
            <div class="card">
                <a href='https://github.com/Andyrod209/Spacey-Capstone' target="_blank"></a>
                <img src={process.env.PUBLIC_URL + "images/spacey.png"}/>
                <div class="container">
                    <h4>Spacey</h4>
                    <p>A Space Enthusiasts social media platform for users to connect and talk about anything
                        that is space-related.</p>
                </div>
            </div>
            <div class="card">
                <a href='https://github.com/Payner01/dcc-youtube-clone-frontend' target="_blank"></a>
                <img src={process.env.PUBLIC_URL + "images/meTube.png"}/>
                <div class="container">
                    <h4>MeTube</h4>
                    <p>A youtube clone using the youtube API to search for videos.</p>
                </div>
            </div>
            <div class="card">
                <a href='https://github.com/Andyrod209/robots_vs_dinosaurs' target="_blank"></a>
                <img src={process.env.PUBLIC_URL + "images/robots-vs-dinosaurs.png"}/>
                <div class="container">
                    <h4>Robots vs. Dinosaurs</h4>
                    <p>A game where you play as robots to fight against dinosaurs using python to better 
                        understanding classes</p>
                </div>
            </div>
            <div class="card">
                <a href='https://github.com/Andyrod209/Random-Trip-Generator' target="_blank"></a>
                <img src={process.env.PUBLIC_URL + "images/day-trip-generator.png"} />
                <div class="container">
                    <h4>Day Trip Generator</h4>
                    <p>A random Day Trip Generator. have your trip be randomly selected.
                        Created to better userstand fundamentals.
                    </p>
                </div>
            </div>
            <div class="card">
                {/* using a tag to make it a clickable link */}
                <a href='https://github.com/Andyrod209/RPSLS' target="_blank"></a>
                <img src={process.env.PUBLIC_URL + "images/RPSLS.png"} />
                <div class="container">
                    <h4>RPSLS</h4>
                    <p>Rock Paper Scissors Lizard Spock, is a game where you play against Sheldon 
                        from the big bang theory. Created to better understand inheritance. </p>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Projects;