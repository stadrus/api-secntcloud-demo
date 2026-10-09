import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import {ShoppingBag, ShoppingCart} from "phosphor-react";

const Header = () =>{
    return (
        <div className="header">
            
            <div className="logo">
                <img src={Logo} width={100}></img>
            </div>
            
            <div className="navbar">
                <nav className="navlinks">
                <Link to="/"><ShoppingBag size={15}/>Shop </Link>
                {/* <Link to="/Womens">For Her</Link>
                <Link to="/Mens">For Him</Link> */}
                <Link to="/Cart" ><ShoppingCart size={15}/>Cart</Link>
                </nav>
            </div>
           
        </div>
    )
}
export default Header