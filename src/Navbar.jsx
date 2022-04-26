import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar" style={{backgroundColor:'yellow'}}>
            <ul>
                <li className='name-title'>Andrew Rodriguez</li>
                <li className='navbar-content'>About</li>
                <li className='navbar-content'>Projects</li>
                <li className='navbar-content'>Contact me</li>
            </ul>
        </div> );
}
 
export default Navbar;