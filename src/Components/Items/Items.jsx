import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../..";
import "./styles.css";


const Items = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {

        const db = getFirestore(app)
        const Items = collection(db, "products")
        getDocs(Items).then((snapshot) => {
            if (snapshot.size !== 0) {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(),}));
                const prodFiltrados = data.filter((product) => product.category === id
                );
                setProducts(id ? prodFiltrados : data);
            }
        });

    }, [id])

    //title, description, price, image

    return (
        <div className="items">
            {products.map((item) => (
                <Link className="stylesLink" to={"/item/" + item.id} key={item.id}>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        stock={item.stock}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Items
