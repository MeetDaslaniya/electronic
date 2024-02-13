import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="header">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contectus">Contectus</Link></li>
            <li><Link to="/aboutus">Aboutus</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">CART</Link></li>
            </ul>
        </div>
    )
}

export default Header;