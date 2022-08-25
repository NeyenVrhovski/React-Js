import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({itemData}) => {

    return(
        <Card style={{ width: '18rem', margin: '0 30px 40px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Card.Img variant="top" src={itemData.pictureUrl}/>
            <Card.Body style={{height: 'fit-content', flex: '0 1 auto'}}>
                <Card.Title>{itemData.title}</Card.Title>
                <Card.Text>{itemData.description}</Card.Text>
                <Card.Text>${itemData.price}</Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Item