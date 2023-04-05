import { Link } from "react-router-dom";
import './navbar.styles.scss';

const NavbarContainer = ()=>{
    return(
        <nav className="link-container">
            <div className="symbol">
                React
            </div>
            <div className="link"> 
                <Link to={'/'}>home</Link>
                <Link to={'/Shop'}>shop</Link>
            </div>
            
        </nav>
    )
}
export default NavbarContainer;