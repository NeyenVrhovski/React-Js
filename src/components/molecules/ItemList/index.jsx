import './ItemList.scss';
import Item from '../../atoms/Item';
import {dummyData} from './../../../services/dummyData';
import { useEffect, useState } from 'react';

const ItemList = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(setData(dummyData))
            }, 2000)
        })
    };

    useEffect(() => {
        getData()
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    return (
        <div className='cardsContainer'>
            {data.map((e) => {
                return(
                    <Item itemData={e}/>
                )
            })}
        </div>
    )
}

export default ItemList