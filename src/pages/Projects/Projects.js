import './projects.css'
const Projects = () => {
    return ( 
        <><h1 className='projects-title'>projects page</h1>
        <div className="projects">
            <div class="card">
                <img src={process.env.PUBLIC_URL + "images/spacey.png"}/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect Engineer</p>
                </div>
            </div>
            <div class="card">
                <img src={process.env.PUBLIC_URL + "images/meTube.png"}/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect Engineer</p>
                </div>
            </div>
            <div class="card">
                <img src={process.env.PUBLIC_URL + "images/robots-vs-dinosaurs.png"}/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect Engineer</p>
                </div>
            </div>
            <div class="card">
                <img src={process.env.PUBLIC_URL + "images/day-trip-generator.png"} />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect Engineer</p>
                </div>
            </div>
            <div class="card">
                <img src={process.env.PUBLIC_URL + "images/RPSLS.png"} />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect Engineer</p>
                </div>
            </div>
        </div></>
     );
}
 
export default Projects;