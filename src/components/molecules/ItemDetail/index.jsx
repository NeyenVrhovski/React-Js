import './ItemDetail.scss';
import ItemCount from '../../atoms/ItemCount';
import { useState } from 'react';


const ItemDetail = ({itemData}) => {

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
                    <ItemCount initial={1} stock={itemData.stock} item={itemData} itemName={itemData.title}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail