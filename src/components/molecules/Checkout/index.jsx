import './Checkout.scss';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import Swal from 'sweetalert2';
import moment from 'moment';
import { addDoc, collection, doc, getDoc, updateDoc } from'firebase/firestore';
import { db } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [correctData, setCorrectData] = useState(false);
    const navigate = useNavigate();
    const {cart, emptyCart, cartTotal} = useContext(CartContext);
    const [formValues, setFormValues] = useState(
        {
            name: '',
            lastname: '',
            email: '',
            telephone: '',
            address: ''
        }
    )

    const handleInput = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        checkData();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let noStock = false;

        if(correctData)
        {
            cart.forEach((item) => {
                let itemRef = doc(db, 'Productos', item.id);
                getDoc(itemRef)
                .then((doc) => {
                    doc.data().stock < item.quantity ? noStock = true : noStock = noStock;
                })
            })

            setTimeout(() => {
                if(!noStock)
            {
                const orden = {
                    buyerData: formValues,
                    items: cart,
                    total: cartTotal,
                    date: moment().format('MMMM Do YYYY, h:mm:ss a')
                }

                cart.forEach((item) => {
                    let itemDoc = doc(db, 'Productos', item.id);
                    updateDoc(itemDoc, {stock: item.stock - item.quantity})
                })

                const ordersRef = collection(db, 'Ordenes');

                emptyCart();

                addDoc(ordersRef, orden)
                .then((doc) => {
                    Swal.fire({
                        title: 'Compra exitosa!',
                        text: `Tu número de orden es ${doc.id}, guardalo para hacer el seguimiento del pedido`,
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Cerrar',
                        allowOutsideClick: 'false',
                        preConfirm: navigate('/')
                    })
                })
            }
            else
            {
                Swal.fire({
                    title: 'Error de compra',
                    text: `Lo sentimos, hubo un problema con el stock de nuestros productos, vuelve a agregar los productos al carrito e intentalo de nuevo`,
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Cerrar',
                    allowOutsideClick: 'false',
                    preConfirm: navigate('/')
                })
            }
            },1000)
        }
        else
        {
            Swal.fire({
                title: 'Error!',
                text: 'Ingresaste informacion errónea',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })
        }
    }

    const checkData = () => {
        if(formValues.name.length > 0 && formValues.lastname.length > 0 && formValues.email.includes('@') && formValues.telephone.length > 7 && formValues.address.length > 2)
        {
            setCorrectData(true);
        }
        else
        {
            setCorrectData(false);
        }
    }



    return(
        <div className='mainCheckoutContainer'>
            <h2 className='mainTitle'>Para terminar la compra, ingresá tus datos</h2>
            <div className='formContainer'>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Nombre
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='name' onChange={((e) => handleInput(e))} type="text" placeholder='Nombre'/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Apellido
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='lastname' onChange={((e) => handleInput(e))} type="text" placeholder="Apellido" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='email' onChange={((e) => handleInput(e))} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Teléfono
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='telephone' onChange={((e) => handleInput(e))} type="number" placeholder="Teléfono" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Dirección
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control name='address' onChange={((e) => handleInput(e))} type="text" placeholder="Dirección" />
                    </Col>
                </Form.Group>

                <Button onClick={((e) => handleSubmit(e))} className={correctData ? '' : 'disabled'} style={{margin: '0 0 0 44%'}} variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default Checkout