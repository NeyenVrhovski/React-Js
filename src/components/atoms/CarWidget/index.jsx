import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../molecules/CartContext";
import './CarWidget.scss';
import { BsCartFill } from "react-icons/bs";

const CarWidget = () => {

    const { cartQuantity } = useContext(CartContext);

    return (
        <div style={cartQuantity <= 0 ? {visibility: 'hidden'} : {}} className="mainCartContainer">
            <Link to={'/cart'}>
                <BsCartFill style={{width: 25, height: 25}}/>
                <span>{cartQuantity}</span>
            </Link>
        </div>
    )
}

export default CarWidget