import ItemDetail from "../../Itemdetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import { app } from "../../..";
import { useParams } from "react-router-dom";
import "./styles.css";





const ListaDetail = () => {
  const [productDetail, setProductDetail] = useState({})
  const {id} = useParams()

  
  useEffect(() => {
    const db = getFirestore(app)
    const productsDetail = doc(db, "products", `${id}` )
    getDoc(productsDetail).then((snapshot) => {
      if (snapshot.exists()) {
        setProductDetail ({ id: snapshot.id, ...snapshot.data() })
      } else {
        console.error("array no detectado".error)
      }
    })


  }, [id])

  return (
    <div className="ListaDetail-container">
      <ItemDetail 
      itemSelect={productDetail} />
    </div>
  )
}

export default ListaDetail
