import Toggle from '../Toggle/Toggle'
import'./navbar.css'
import {Link} from 'react-scroll';
const Navbar=()=>{
    return(
        <div className='nav'>
        <div className='n-left'>
        <div className='n-name'>Sushant</div>
        {/* <span>toggle</span>    */}
        <Toggle/>
        </div>
        <div className='n-right'></div>
        <div className='n-list'><ul>
            <Link spy={true} to={Navbar} smooth={true} activeClass='activeClass'>
    <li>Home</li>
    </Link>
    <Link spy={true} to='skills' smooth={true} activeClass='activeClass'>
    <li>Skills</li>
    </Link>
    <Link spy={true} to='project' smooth={true} activeClass='activeClass'>
    <li>Project</li>
    
    </Link>
    <Link spy={true} to='Certificate' smooth={true} activeClass='activeClass'>
    <li>Certificate</li>
    </Link>
    <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
    <li>Testimonials</li>   </Link>
</ul></div>
<Link to='Contact'  spy={true} smooth={true} >
<button className='button n-button'> Contact us</button>
   
    </Link>
        </div>
    )
}
export default Navbar