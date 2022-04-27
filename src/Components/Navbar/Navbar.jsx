import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li ><a href='/'>AR</a></li>
                <li ><a href="/about">About</a></li>
                <li ><a>Projects</a></li>
                <li ><a>Contact me</a></li>
            </ul>
        </div> );
}
 
export default Navbar;