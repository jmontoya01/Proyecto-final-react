import "./styles.css";

const Item = ({ title, price, image }) => {

    return (
        <div className="card-container">
            <img className="card-image" src={image} alt="imagen}" />
            <h5 className="card-title">{title}</h5>
            <div className="container-price"> 
                <p className="p-price">$ {price}</p>
            </div>
        </div>
    )
}

export default Item
