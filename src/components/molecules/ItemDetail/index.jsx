import './ItemDetail.scss';
import ItemCount from '../../atoms/ItemCount';
import { useState, useEffect, useContext} from 'react';
import { CartContext } from '../../molecules/CartContext';
import { Link, useNavigate } from 'react-router-dom';


const ItemDetail = ({itemData}) => {

    const { cart, isInCart, addToCart } = useContext(CartContext);
    const [stock, setStock] = useState(itemData.stock);
    const navigate = useNavigate();

    useEffect(() => {
        if(isInCart(itemData.id))
        {
            let cartItem = cart.find((el) => el.id == itemData.id);
            setStock(itemData.stock - cartItem.quantity);
        }
    },[]);
    

    const onAdd = (quantity) => {
        if(isInCart(itemData.id))
        {
            cart[cart.findIndex((el) => el.id == itemData.id)].quantity += quantity;
        }
        else
        {
            addToCart(itemData, quantity);
        } 
        navigate('/cart');
    }

    return (
        <div className='mainItemContainer'>
            <div className='imgContainer'>
                <img alt={itemData.title} src={itemData.pictureUrl}></img>
            </div>
            <div className='descriptionContainer'>
                <div className='itemDataContainer'>
                    <h2>{itemData.title}</h2>
                    <p className='itemDescription'>{itemData.description}</p>
                    <p className='itemPrice'>${itemData.price}</p>
                </div>
                <div className='itemCountContainer'>
                    {stock < 1 
                    ?
                    <p>Lo sentimos, no contamos con este item en stock</p>
                    :
                    <ItemCount initial={1} stock={stock} item={itemData} itemName={itemData.title} onAdd={onAdd}/>}
                    <Link to={'/cart'}>
                        <button className='btn btn-success addButton'>Terminar mi compra</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail