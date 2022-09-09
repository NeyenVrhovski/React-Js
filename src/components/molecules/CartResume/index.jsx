import { useContext } from 'react';
import CartItem from '../../atoms/CartItem';
import { CartContext } from '../CartContext';
import './CartResume.scss';

const CartResume = () => {

    const {cart, emptyCart} = useContext(CartContext);

    return(
        <div className='mainResumeContainer'>
            {cart.map((el) => {
                return(
                    <CartItem key={el.id} item={el}/>
                )
            })}
            <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
        </div>
    )
}

export default CartResume