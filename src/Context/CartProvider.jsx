import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

const CartProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const addItem = (product, quantity) => {
        if(isInCart(product.id)){
            const newProducts = productsCart.map((item) => {
                if(item.id === product.id){
                    return{
                        ...item,
                        quantity: item.quantity + quantity
                    }
                }
                return item
            })
            setProductsCart(newProducts)
        } else {
            setProductsCart([...productsCart, { ...product, quantity }]);
        }
        
    }

    const isInCart = (id) => {
        return productsCart.some((product) => product.id === id)
    }

    const  clear = () => {
        setProductsCart([])
    }

    const removeItem = (id) => {
        setProductsCart(productsCart.filter((product) => product.id !== id))

    }


    useEffect(() => {
        setProductQuantity(
            productsCart.reduce((acc, productsCart) => acc + productsCart.quantity, 0), 0
            );
    }, [productsCart]);

    return (
        <CartContext.Provider value={{ productsCart, addItem, productQuantity, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider
