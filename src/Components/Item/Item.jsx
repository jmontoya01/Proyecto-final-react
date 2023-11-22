import "./styles.css";

const Item = ({ title, price, image }) => {

    return (
        <div className="card-container">
            <img className="card-image" src={image} alt="imagen}" />
            <h5 className="card-title">{title}</h5>
                <p className="p-price">$ {price}</p>
        </div>
    )
}

export default Item
