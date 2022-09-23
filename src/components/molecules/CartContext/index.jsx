import { createContext, useState } from 'react';
    
    export const CartContext = createContext([]);

    export const CartProvider = ({children}) => {
        const [cart, setCart] = useState([]);
  
        const addToCart = (selectedItem, quantity) => {
            if(isInCart(selectedItem.id))
            {
                let index = cart.findIndex((el) => el.id == selectedItem.id);
                let newItem = cart[index];
                newItem.quantity += quantity;
                cart.splice(index, 1);
                setCart([...cart, newItem]);
            }
            else
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
        
        const cartTotal = cart.reduce((prevEl, nextEl) => prevEl + nextEl.quantity * nextEl.price, 0)

        return(
            <CartContext.Provider value={{
                cart,
                cartTotal,
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