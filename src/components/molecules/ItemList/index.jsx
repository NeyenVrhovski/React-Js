import './ItemList.scss';
import Item from '../../atoms/Item';
import { TailSpin } from 'react-loader-spinner';
import {dummyData} from './../../../services/dummyData';
import { useEffect, useState } from 'react';

const ItemList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(dummyData)
            }, 2000)
        })
    };

    useEffect(() => {
        getData()
        .then((response) => {
            setData(response);
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
        <div className='cardsContainer'>
            {data.map((e) => {
                return(
                    <Item key={e.id} itemData={e}/>
                )
            })}
        </div>}
        </>
    )
}

export default ItemList