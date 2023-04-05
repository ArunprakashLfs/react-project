import { Link } from "react-router-dom";
import './navbar.styles.scss';
import logo from '../assets/logo192.png'

const NavbarContainer = ()=>{
    return(
        <nav className="link-container">
            <div className="symbol">
                <span>React</span>
                <img src={logo} alt="logo" className="logo-img"></img>
            </div>
            <div className="link"> 
                <Link to={'/'}>home</Link>
                <Link to={'/Shop'}>shop</Link>
                <Link to={'/signin'}>users</Link>
            </div>
            
        </nav>
    )
}
export default NavbarContainer;