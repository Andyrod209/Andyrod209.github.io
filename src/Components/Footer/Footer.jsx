import './Footer.css'

const Footer = () => {
    return ( 
        <ul>
            <div className='list'>
                {/* 
                added all socails and emails. 
                make contact info stay at the bottom 
                at all times 
                */}
                <li><b>Linked In</b></li>
                <li><b>GitHub</b></li>
                <li><b>Email:</b> rodr.andye@gmail.com</li>
                <li><b>phone:</b> (209) 693-1596</li>
            </div>
        </ul>
     );
}
 
export default Footer;