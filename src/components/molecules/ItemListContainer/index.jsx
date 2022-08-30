import ItemList from '../../molecules/ItemList';
import ItemCount from '../../atoms/ItemCount';
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const onAdd = (itemName, itemQuantity) => {
        console.log(`Agregado! Item: ${itemName}, Cantidad: ${itemQuantity}`);
    }

    return (
        <div className='mainItemContainer'>
            <ItemCount itemName={'Gorra'} initial={1} stock={5} onAdd={onAdd}/>
            <ItemCount itemName={'Bufanda'} initial={2} stock={10} onAdd={onAdd}/>
            <ItemCount itemName={'Zapatillas'} initial={3} stock={3} onAdd={onAdd}/>
            <ItemCount itemName={'Guantes'} initial={4} stock={8} onAdd={onAdd}/>
            {/* <ItemList/> */}
        </div>
    )
}

export default ItemListContainer