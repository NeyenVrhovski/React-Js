import './ItemDetailContainer.scss';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { TailSpin } from 'react-loader-spinner';
import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();

    const getItem = async () => {
        const docRef = doc(db, 'Productos', itemId);
        
        try {
            let rawData = await getDoc(docRef);
            let rawItem = rawData.data();
            rawItem["id"] = itemId;
            setItem(rawItem);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        getItem();
    },[itemId])

    return (
        <>
        {loading ? 
        <div className='spinnerContainer'>
            <TailSpin/>
        </div>
        :
            <ItemDetail itemData={item}/>
        }
        </>
    )
}

export default ItemDetailContainer