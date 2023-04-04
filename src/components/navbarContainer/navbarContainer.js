import { Link } from "react-router-dom"

const NavbarContainer = ()=>{
    return(
        <nav>
            <Link to={'/home'}>home</Link>
            <Link to={'/Shop'}>shop</Link>
        </nav>
    )
}
export default NavbarContainer;