
// import CartProvider from "../../../Context/CartProvider"
import { useState, useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from "../..";
import "./styles.css";

const Formulario = () => {

    const { productsCart } = useContext(CartContext)
    

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const createOrder = (event) => {
        event.preventDefault()
        const db = getFirestore(app)
        const querySnapshot = collection(db, 'orders')
        const newOrder = {
            buyer: formValue,
            items: productsCart.map((product) => {
                return {
                    title: product.title,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity
                }
            }),
            date: new Date(),
            total: productsCart.reduce(
                (acc, curr) => acc + curr.price * curr.quantity, 0)
        }
        addDoc(querySnapshot, newOrder)
            .then((res) => alert('Orden creada con éxito'))
            .catch((err) => alert('Error al crear la orden'))
    }

    const validateForm =
        formValue.name === '' || formValue.phone === '' || formValue.email === ''

    const handleInput = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='container'>
            <h1>Datos de tu compra</h1>
            <p>Productos: {productsCart.title}</p>


            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre completo </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={formValue.name}
                        onChange={handleInput}
                        name="name" />
                    <Form.Text className="text-muted">
                        Por favor ingrese su nombre completo
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu telefono"
                        value={formValue.phone}
                        onChange={handleInput}
                        name="phone" />
                    <Form.Text className="text-muted">
                        Por favor ingrese su número de telefono
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu email"
                        value={formValue.email}
                        onChange={handleInput}
                        name="email" />
                    <Form.Text className="text-muted">
                        Por favor ingrese su email
                    </Form.Text>
                </Form.Group>
                <Button onClick={createOrder} variant="primary" type="submit" disabled={validateForm}>
                    Confirmar compra
                </Button>
            </Form>
        </div>
    )
}

export default Formulario
