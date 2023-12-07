import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import * as Icon from 'react-bootstrap-icons';
import "./styles.css";

const Item = ({ title, price, image, quantity, idProduct }) => {
    const { removeItem } = useContext(CartContext)



    return (
        <div className="card-container">
            <img className="card-image" src={image} alt="imagen}" />
            <h5 className="card-title">{title}</h5>
            <div className="container-price">
                <p className="p-price">$ {price}</p>
            </div>
            {quantity > 0 ? <p className="cantidad">Cantidad: {quantity}</p> : null} 
            {quantity > 0  ? <button className="remove-item"   onClick= { () => {removeItem(idProduct)} } ><Icon.Trash /> </button> : null }
        </div>
    )
}

export default Item
