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
            <div  className="link-component"> 
                <Link className="link" to={'/'}>home</Link>
                <Link className="link" to={'/Shop'}>shop</Link>
                <Link className="link" to={'/signin'}>users</Link>
            </div>
            
        </nav>
    )
}
export default NavbarContainer;