import { useContext } from "react";
import imgUrl from "../../../assets/icons/shoppingCart.png";
import { CartContext } from "../../molecules/CartContext";
import './CarWidget.scss'

const CarWidget = () => {

    const { cartQuantity } = useContext(CartContext);

    return (
        <div className="mainCartContainer">
            <img src={imgUrl}></img>
            <span>{cartQuantity}</span>
        </div>
    )
}

export default CarWidget