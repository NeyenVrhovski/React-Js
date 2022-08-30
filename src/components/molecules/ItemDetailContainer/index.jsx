import './ItemDetailContainer.scss';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { TailSpin } from 'react-loader-spinner';
import { dummyData } from '../../../services/dummyData';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(dummyData[0])
            }, 2000)
        })
    };

    useEffect(() => {
        getData()
        .then((response) => {
            setItem(response);
            setLoading(false);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

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