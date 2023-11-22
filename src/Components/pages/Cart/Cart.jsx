import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import Item from "../../Item/Item"
import "./styles.css";



const Cart = () => {
    const { productsCart, clear } = useContext(CartContext)
    console.log("🚀 ~ file: Cart.jsx:10 ~ Cart ~ productsCart:", productsCart)


    return (
        <div>
            <h1 className="cart-titulos">Carrito de compras</h1>
            <div className="container-button"><button className="btn-vaciar" onClick={clear}>Vaciar carrito</button></div>
            {productsCart.length  > 0 ?
                <div className="item-cart">
                    {productsCart.map((item) => (
                        <Item
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div> : <h2 className="cart-titulos">No hay productos en el carrito</h2>}

        </div>
    )
}

export default Cart
