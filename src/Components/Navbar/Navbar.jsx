import './Navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul>
                <li ><a href='/'>Andrew Rodriguez</a></li>
                <li ><a href="/about">About</a></li>
                <li ><a href='/projects'>Projects</a></li>
            </ul>
        </nav> );
}
 
export default Navbar;