import ItemList from '../../molecules/ItemList';
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const onAdd = (itemName, itemQuantity) => {
        console.log(`Agregado! Item: ${itemName}, Cantidad: ${itemQuantity}`);
    }

    return (
        <div className='mainItemContainer'>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer