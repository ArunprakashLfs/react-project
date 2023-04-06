import { Link } from "react-router-dom";
import './navbar.styles.scss';
import logo from '../assets/logo192.png'

const NavbarContainer = ()=>{
    return(
        <nav className="link-container">
            <Link className="symbol"  to={'/'}>
                <span>React</span>
                <img src={logo} alt="logo" className="logo-img"></img>
            </Link>
            <div  className="link-component"> 
                {/* <Link className="link" to={'/'}>home</Link> */}
                <Link className="link" to={'/Shop'}>shop</Link>
                <Link className="link" to={'/signin'}>users</Link>
            </div>
            
        </nav>
    )
}
export default NavbarContainer;