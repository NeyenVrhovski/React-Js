import ItemCount from '../../atoms/ItemCount';
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const onAdd = (itemName, itemQuantity) => {
        console.log(`Agregado! Item: ${itemName}, Cantidad: ${itemQuantity}`);
    }

    return (
        <div className='mainItemContainer'>
            <ItemCount stock={5} initial={1} onAdd={onAdd} itemName={"Gorra Nike"}></ItemCount>
            <ItemCount stock={8} initial={2} onAdd={onAdd} itemName={"Camperon Adidas"}></ItemCount>
            <ItemCount stock={3} initial={3} onAdd={onAdd} itemName={"Zapatillas Vans"}></ItemCount>
            <ItemCount stock={9} initial={4} onAdd={onAdd} itemName={"Medias Puma"}></ItemCount>
        </div>
    )
}

export default ItemListContainer