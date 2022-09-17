import React, { useContext } from 'react';
import { CartContext } from '../../molecules/CartContext';
import './CartItem.scss'

const CartItem = ({item}) => {

    const {removeFromCart} = useContext(CartContext);

  return (
    <div className='itemContainer'>
        <img src={item.pictureUrl}></img>
        <div className='descriptionContainer'>
            <h2>{item.title}</h2>
        <p><span>Precio:</span> ${item.price}</p>
            <p><span>Cantidad:</span> {item.quantity}</p>
            <p><span>Descripción:</span> {item.description}</p>
        </div>
        <div className='eraseContainer'>
            <svg onClick={(() => {removeFromCart(item.id)})} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>
    </div>
  )
}

export default CartItem