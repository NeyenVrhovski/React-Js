import { Children, createContext, useState } from 'react';
import { dummyData } from '../../../services/dummyData';
    
    export const CartContext = createContext([]);

    export const CartProvider = ({children}) => {
        const [cart, setCart] = useState([]);
  
        const addToCart = (selectedId, quantity) => {
            let selectedItem = dummyData.find((el) => el.id === selectedId);
            selectedItem["quantity"] = quantity;
            setCart([...cart, selectedItem]);
        }

        const removeFromCart = (selectedId) => {
            let selectedItem = cart.findIndex(el => el.id === selectedId);
            let auxArray = cart;
            auxArray.splice(selectedItem, 1);
            setCart([...auxArray]);
        }

        const isInCart = (selectedId) => {
            return cart.some((el) => el.id === selectedId)
        }

        const emptyCart = () => {
            setCart([])
        }

        const cartLenght = cart.length

        return(
            <CartContext.Provider value={{
                cart,
                cartLenght,
                addToCart,
                removeFromCart,
                isInCart,
                emptyCart
            }}>
                {children}
            </CartContext.Provider>
        )
    }