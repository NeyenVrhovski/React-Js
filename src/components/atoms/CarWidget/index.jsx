import imgUrl from "../../../assets/icons/shoppingCart.png";
import './CarWidget.scss'

const CarWidget = () => {
    return (
        <div className="mainCartContainer">
            <img src={imgUrl}></img>
            <span>4</span>
        </div>
    )
}

export default CarWidget