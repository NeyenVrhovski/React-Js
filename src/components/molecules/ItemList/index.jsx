import './ItemList.scss';
import Item from '../../atoms/Item';
import { TailSpin } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../../firebase/config';

const ItemList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    const getData = async () => {

        const productosRef = collection(db, 'Productos');
        const q = categoryId ? query(productosRef, where('categoryId', '==', parseInt(categoryId))) : productosRef;

        try {
            let rawData = await getDocs(q)
            let productsArray = []
            rawData.docs.forEach((e, i) => {
                productsArray.push(e.data());
                productsArray[i]["id"] = e.id;
            })
            console.log(productsArray)
            setData(productsArray);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        getData();
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