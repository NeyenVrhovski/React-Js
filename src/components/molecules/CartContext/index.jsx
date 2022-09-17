import { createContext, useState } from 'react';
    
    export const CartContext = createContext([]);

    export const CartProvider = ({children}) => {
        const [cart, setCart] = useState([]);
  
        const addToCart = (selectedItem, quantity) => {
            if (!cart.some((el) => el.id === selectedItem.id))
            {
                selectedItem["quantity"] = quantity;
                setCart([...cart, selectedItem]);
            }
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

        const cartQuantity = cart.reduce((prevEl, nextEl) => prevEl + nextEl.quantity, 0);

        return(
            <CartContext.Provider value={{
                cart,
                cartQuantity,
                addToCart,
                removeFromCart,
                isInCart,
                emptyCart
            }}>
                {children}
            </CartContext.Provider>
        )
    }