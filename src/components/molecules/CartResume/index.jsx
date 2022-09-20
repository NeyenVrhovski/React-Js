import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../atoms/CartItem';
import { CartContext } from '../CartContext';
import './CartResume.scss';

const CartResume = () => {

    const {cart, emptyCart, cartQuantity} = useContext(CartContext);

    return(
        <div className='mainResumeContainer'>
            {cart.map((el) => {
                return(
                    <CartItem key={el.id} item={el}/>
                )
            })}
            {cartQuantity <= 0 ? 
            <>
            <p>Aún no tenés nada en tu carrito. Hacé click en el botón para llenarlo!</p>
            <Link to={'/'}>
                <button className='btn btn-success'>Llená tu carrito</button>
            </Link>
            </>
            :
            <div className='buttonsContainer'>
                <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
                <Link to={'/checkout'}>
                    <button className='btn btn-success'>Terminar mi compra</button>
                </Link>
            </div>
            }
        </div>
    )
}

export default CartResume