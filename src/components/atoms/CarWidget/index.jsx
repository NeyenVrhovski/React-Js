import { useContext } from "react";
import imgUrl from "../../../assets/icons/shoppingCart.png";
import { CartContext } from "../../molecules/CartContext";
import './CarWidget.scss'

const CarWidget = () => {

    const {cartLenght} = useContext(CartContext);

    return (
        <div className="mainCartContainer">
            <img src={imgUrl}></img>
            <span>{cartLenght}</span>
        </div>
    )
}

export default CarWidget