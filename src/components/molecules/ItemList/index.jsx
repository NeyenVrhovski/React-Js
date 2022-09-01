import './ItemList.scss';
import Item from '../../atoms/Item';
import { TailSpin } from 'react-loader-spinner';
import {dummyData} from './../../../services/dummyData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

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
            if (!categoryId)
            {
                setData(response);
            }else{
                setData(response.filter(item => item.categoryId.toString() === categoryId));
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log(data);
            setLoading(false);
        })
    },[categoryId])

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