import { useState } from 'react';
import './ItemCount.scss';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const stock = props.stock;

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };

    return (
        <div className='mainContainer'>
            <p>{props.itemName}</p>
            <div className='counterContainer'>
                <button onClick={restar} className={count <= 1 ? 'btn btn-primary disabled' : 'btn btn-primary'}>-</button>
                <div className='numberContainer'>
                    <span>{count}</span>
                </div>
                <button onClick={sumar} className={count < props.stock ? 'btn btn-primary' : 'btn btn-primary disabled'}>+</button>
            </div>
            <button onClick={(() => props.onAdd(props.itemName, count))} className='btn btn-success addButton'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount