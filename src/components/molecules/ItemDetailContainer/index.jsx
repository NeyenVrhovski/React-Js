import './ItemDetailContainer.scss';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { TailSpin } from 'react-loader-spinner';
import { dummyData } from '../../../services/dummyData';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();

    const getData = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(dummyData)
            }, 2000)
        })
    };

    useEffect(() => {
        setLoading(true);
        getData()
        .then((response) => {
            setItem(response.find(el => el.id.toString() === itemId));
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log(item)
            setLoading(false);
        })
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