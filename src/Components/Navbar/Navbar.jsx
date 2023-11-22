import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";


const NavBar = () => {
    return (
        <nav className="navbar-container" >
            <div>
                <img className="imglogo" src="../images/logosolo.png" alt="logo makers m 3d" />
            </div>
            <div>
                <ul className="list-container">
                    <Link className='linkbtn' to={"/"}>Home |</Link>
                    <Link className='linkbtn' to={"/category/espadas"}>Espadas</Link>
                    <Link className='linkbtn' to={"/category/figuras"}>Figuras de Acción</Link>
                    <Link className='linkbtn' to={"/category/llaveros"}>Llaveros</Link>
                    <Link className='linkbtn' to={"/category/soportes"}>soportes</Link>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar