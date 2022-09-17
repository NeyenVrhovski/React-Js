import { useState } from 'react';
import './ItemCount.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

    const handleAdd = () => {
        if (count < props.stock)
        {
            setCount(count + 1);
        }
    };

    const handleSubstract = () => {
        if (count > 1)
        {
            setCount(count - 1);
        }
    };

    return (
        <div className='mainContainer'>
            <p>{props.itemName}</p>
            <div className='counterContainer'>
                <button onClick={handleSubstract} className={count <= 1 ? 'btn btn-primary disabled' : 'btn btn-primary'}>-</button>
                <div className='numberContainer'>
                    <span>{count}</span>
                </div>
                <button onClick={handleAdd} className={count < props.stock ? 'btn btn-primary' : 'btn btn-primary disabled'}>+</button>
            </div>
            <button onClick={(() => {props.onAdd(count)})} className='btn btn-success addButton'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount