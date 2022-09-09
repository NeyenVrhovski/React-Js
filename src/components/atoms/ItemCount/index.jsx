import { useState } from 'react';
import './ItemCount.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../molecules/CartContext';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [isSelected, setIsSelected] = useState(false);
    const { cart, isInCart, addToCart } = useContext(CartContext);
    const stock = props.stock;

    
    useEffect(() => {
        isInCart(props.item.id) ? setIsSelected(true) : setIsSelected(false);
    },[]);

    const handleAdd = () => {
        if (count < stock)
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
       <>
       {isSelected 
       ?
       <Link to={'/cart'}>
            <button className='btn btn-success addButton'>Terminar mi compra</button>
       </Link>
       : <div className='mainContainer'>
            <p>{props.itemName}</p>
            <div className='counterContainer'>
                <button onClick={handleSubstract} className={count <= 1 ? 'btn btn-primary disabled' : 'btn btn-primary'}>-</button>
                <div className='numberContainer'>
                    <span>{count}</span>
                </div>
                <button onClick={handleAdd} className={count < props.stock ? 'btn btn-primary' : 'btn btn-primary disabled'}>+</button>
            </div>
            <button onClick={(() => {addToCart(props.item.id, count); setIsSelected(true)})} className='btn btn-success addButton'>Agregar al Carrito</button>
        </div>
       }
       </>
    )
}

export default ItemCount