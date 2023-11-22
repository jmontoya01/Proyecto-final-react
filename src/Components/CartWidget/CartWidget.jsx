import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import "./styles.css"


const CartWidget = () => {
    const { productQuantity } = useContext(CartContext)

    const navigate = useNavigate();
    const handleNavigationCart = () => {
        navigate('/cart')
    }
    return (
        <Link to={'/cart'}>
            <div className='CartWidget-container btn btn-dark'>
                <Icon.Cart2 onClick={handleNavigationCart} />
                <span>{productQuantity}</span>
            </div>
        </Link>
    )
}

export default CartWidget