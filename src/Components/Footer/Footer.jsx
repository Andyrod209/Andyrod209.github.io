import './Footer.css'

const Footer = () => {
    return ( 
        <div >
        <ul className='list'>
                {/* 
                added all socails and emails. 
                make contact info stay at the bottom 
                at all times 
                */}
                <li><a href='https://www.linkedin.com/in/andrew-e-rodriguez/' target="_blank"><b>Linked In</b></a></li>
                <li><a href='https://github.com/Andyrod209' target="_blank"><b>GitHub</b></a></li>
                <li><b>Email:</b> rodr.andye@gmail.com</li>
                <li><b>phone:</b> (209) 693-1596</li>
        </ul>
        </div>
     );
}
 
export default Footer;