import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

const CartProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const addItem = (product, quantity) => {
        setProductsCart([...productsCart, { ...product, quantity }]);
    }

    const  clear = () => {
        setProductsCart([])
    }

    // const removeItem = (id) => {
    //     setProductsCart(productsCart.filter((product) => product.id !== id))

    // }


    useEffect(() => {
        setProductQuantity(
            productsCart.reduce((acc, productsCart) => acc + productsCart.quantity, 0), 0
            );
    }, [productsCart]);

    return (
        <CartContext.Provider value={{ productsCart, addItem, productQuantity, clear}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider
