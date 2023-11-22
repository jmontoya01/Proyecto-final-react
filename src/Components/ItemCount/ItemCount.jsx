
import "./styles.css"

const ItemCount = ({stock, count, setCount}) => {


const onAdd = () => {
    if (count === stock) return;
    setCount (count + 1);
};

const onSubstract = () => {
    if (count === 0) return;
    setCount (count - 1);
}

    return (
        <div className="item-count">
            <button className="itemCount-button" onClick={onSubstract}>-</button>
            <span>{count}</span>
            {count === stock ? null : <button className="itemCount-button" onClick={onAdd}>+</button>}
        </div>
    );
};

export default ItemCount;


