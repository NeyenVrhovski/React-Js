import './ItemDetail.scss';
import ItemCount from '../../atoms/ItemCount';


const ItemDetail = ({itemData}) => {

    const onAdd = (itemName, itemQuantity) => {
        console.log(`Agregado! Item: ${itemName}, Cantidad: ${itemQuantity}`);
    }

    return (
        <div className='mainItemContainer'>
            <div className='imgContainer'>
                <img alt={itemData.title} src={itemData.pictureUrl}></img>
            </div>
            <div className='descriptionContainer'>
                <div className='itemDataContainer'>
                    <h2>{itemData.title}</h2>
                    <p className='itemDescription'>{itemData.description}</p>
                    <p className='itemPrice'>${itemData.price}</p>
                </div>
                <div className='itemCountContainer'>
                    <ItemCount onAdd={onAdd} initial={1} stock={itemData.stock} itemName={itemData.title}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail